const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function toast(msg) {
  const el = $("#toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("is-visible");
  window.clearTimeout(toast._t);
  toast._t = window.setTimeout(() => el.classList.remove("is-visible"), 2200);
}

function setupYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function setupNav() {
  const navMenu = $("#nav-menu");
  const navToggle = $("#nav-toggle");
  const navClose = $("#nav-close");

  function open() {
    if (!navMenu) return;
    navMenu.classList.add("is-open");
    document.documentElement.style.overflow = "hidden";
  }
  function close() {
    if (!navMenu) return;
    navMenu.classList.remove("is-open");
    document.documentElement.style.overflow = "";
  }

  if (navToggle) navToggle.addEventListener("click", open);
  if (navClose) navClose.addEventListener("click", close);

  $$(".nav__link").forEach((a) => a.addEventListener("click", close));

  document.addEventListener("click", (e) => {
    if (!navMenu || !navMenu.classList.contains("is-open")) return;
    if (e.target === navMenu) close();
  });
}

function setupReveal() {
  const nodes = $$("[data-reveal]");
  if (!nodes.length) return;

  const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
  );

  nodes.forEach((n) => io.observe(n));
}

function setupActiveSection() {
  const links = $$(".nav__link");
  const sections = $$("section[id]");
  if (!links.length || !sections.length) return;

  const byId = new Map(links.map((a) => [a.getAttribute("href")?.slice(1), a]));

  const io = new IntersectionObserver(
    (entries) => {
      // choose the most visible entry
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
      if (!visible) return;

      const id = visible.target.id;
      links.forEach((a) => a.classList.remove("is-active"));
      byId.get(id)?.classList.add("is-active");
    },
    { threshold: [0.2, 0.35, 0.5, 0.65], rootMargin: "-20% 0px -55% 0px" },
  );

  sections.forEach((s) => io.observe(s));
}

function setupScrollTop() {
  const btn = $("#scrolltop");
  if (!btn) return;

  function sync() {
    if (window.scrollY >= 420) btn.classList.add("is-visible");
    else btn.classList.remove("is-visible");
  }
  sync();
  window.addEventListener("scroll", sync, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copiado.");
  } catch {
    // Fallback: select + execCommand
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    toast("Copiado.");
  }
}

function setupCopyButtons() {
  $$("[data-copy]").forEach((btn) => {
    btn.addEventListener("click", () => copyText(btn.getAttribute("data-copy") || ""));
  });
}

function setupContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !subject || !message) {
      toast("Preencha todos os campos.");
      return;
    }

    const body = [
      `Nome: ${name}`,
      `Email: ${email}`,
      "",
      message,
      "",
      "--",
      "Enviado via portfólio (ffelixlucas.github.io)",
    ].join("\n");

    const to = "lucas.fafx@gmail.com";
    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast("Abrindo seu e-mail…");
    window.location.href = mailto;
  });
}

setupYear();
setupNav();
setupReveal();
setupActiveSection();
setupScrollTop();
setupCopyButtons();
setupContactForm();

