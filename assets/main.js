import { siteData } from "./site-data.js?v=20260831-project-data-fix";

document.documentElement.classList.add("js-enhanced");

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
};

const icons = {
  email: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="2" y="4" width="20" height="16" rx="3.5" fill="currentColor"></rect>
      <path d="M5.75 8.2 12 13.05l6.25-4.85" fill="none" stroke="var(--bg)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M5.75 16.65V8.9l6.25 4.85 6.25-4.85v7.75" fill="none" stroke="var(--bg)" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `,
  cv: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M6 2.5h8.1L20 8.4V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2Z"></path>
      <path fill="var(--bg)" d="M14 4.45V8.5h4.05L14 4.45Z"></path>
      <path d="M8.15 12h7.7M8.15 15.35h7.7M8.15 18.7h5.25" fill="none" stroke="var(--bg)" stroke-width="1.65" stroke-linecap="round"></path>
    </svg>
  `,
  github: `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" fill="none" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M8 1.3a6.665 6.665 0 0 1 6.667 6.667 6.68 6.68 0 0 1-4.542 6.325c-.333.067-.458-.142-.458-.316 0-.226.008-.942.008-1.834 0-.625-.208-1.025-.45-1.233 1.483-.167 3.042-.734 3.042-3.292a2.58 2.58 0 0 0-.684-1.792c.067-.166.3-.85-.066-1.766 0 0-.559-.184-1.834.683a6.2 6.2 0 0 0-1.666-.225c-.567 0-1.134.075-1.667.225-1.275-.858-1.833-.683-1.833-.683-.367.916-.134 1.6-.067 1.766a2.6 2.6 0 0 0-.683 1.792c0 2.55 1.55 3.125 3.033 3.292-.192.166-.367.458-.425.891-.383.175-1.342.459-1.942-.55-.125-.2-.5-.691-1.025-.683-.558.008-.225.317.009.442.283.158.608.75.683.941.133.376.567 1.092 2.242.784 0 .558.008 1.083.008 1.242 0 .174-.125.374-.458.316a6.66 6.66 0 0 1-4.559-6.325A6.665 6.665 0 0 1 8 1.3"></path>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="1" y="1" width="22" height="22" rx="4.5" fill="currentColor" stroke="currentColor"></rect>
      <path fill="#fff" d="M6.4 9.2h2.2V18H6.4V9.2Zm1.1-4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm3.4 4h2.1v1.2c.3-.6 1.1-1.3 2.4-1.3 1.9 0 2.8 1.1 2.8 3.2V18h-2.2v-4.8c0-1-.4-1.6-1.2-1.6-.9 0-1.5.6-1.5 1.7V18h-2.4V9.2Z"></path>
    </svg>
  `,
  scholar: `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269A7.496 7.496 0 0 0 12 9.5a7.496 7.496 0 0 0-6.758 4.269Z" fill="currentColor"></path>
      <path d="M12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" fill="currentColor"></path>
    </svg>
  `,
  orcid: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16S24.839 0 16 0ZM9.823 5.839c.704 0 1.265.573 1.265 1.26 0 .688-.561 1.265-1.265 1.265-.692-.004-1.26-.567-1.26-1.265 0-.697.563-1.26 1.26-1.26ZM8.864 9.885h1.923v13.391H8.864Zm4.751 0h5.197c4.948 0 7.125 3.541 7.125 6.703 0 3.439-2.687 6.699-7.099 6.699h-5.224Zm1.921 1.74v9.927h3.063c4.365 0 5.365-3.312 5.365-4.964 0-2.687-1.713-4.963-5.464-4.963Z" fill="currentColor"></path>
    </svg>
  `
};

const schoolIcons = {
  hkust: `
    <svg viewBox="0 0 184.3 286" aria-hidden="true" focusable="false">
      <path fill="#996600" d="M143.3 285.9l-33.5-55.7s-1-1.3-1-3.4v-1.3-2.8-99.1H96.1V227v3.2c1 1.1 22.1 36.9 22.1 36.9H66.1s21-35.8 22.1-36.9V227 123.6H75.5v99.2 2.8 1.3c0 2.1-1 3.4-1 3.4L41 286l102.3-.1Z"></path>
      <path fill="#996600" d="M132.9 51.2s6.3-26-16.1-43.1c0 0-9-8.1-26-8.1-15.3 0-24.2 8.1-24.2 8.1-20.8 14.5-15.4 43.1-15.4 43.1h81.7ZM53.7 58.5h76.8c.6-1.5 1.1-2.9 1.6-4.5h-80c.5 1.5 1 3 1.6 4.5ZM129.3 61.1H55c.7 1.6 1.7 3 2.6 4.5h69.3c.8-1.4 1.7-2.9 2.4-4.5ZM62.5 72h59.2c1.1-1.1 2.1-2.3 3.1-3.6H59.4c1 1.2 2 2.4 3.1 3.6ZM68.9 77.3h46.4c1.2-.8 2.4-1.7 3.5-2.7H65.4c1.1.9 2.3 1.9 3.5 2.7ZM75.3 80.9c5.1 2.3 10.8 3.6 16.8 3.6s11.6-1.3 16.8-3.6H75.3Z"></path>
      <path fill="#003366" d="M171.8 86.4H109s-5.9 0-10.5 3.2c-3.6 2.5-6.1 8.2-6.3 8.4-.1-.3-2.7-6-6.3-8.4-4.7-3.2-10.5-3.2-10.5-3.2H12.5L0 106.6h57.5s1.7 0 2.8.2c1.7.3 4.7 1.2 7.8 3.4 4.2 3.1 5.5 4.7 6.5 5.7.6.6 1.8 2.4 1.8 2.4h15.7H97h10.8s1.4-1.8 1.8-2.4c1-1.1 2.2-2.7 6.5-5.7 3.1-2.2 6.1-3.1 7.8-3.4 1-.2 2.8-.2 2.8-.2h57.6l-12.5-20.2Z"></path>
      <path fill="#003366" d="M6.3 112.8V207s0 1 0 1.3c0 1 .1 2 .2 2.8 1 10.1 4.2 17.6 10.1 27.4 9.3 15.4 25.9 26.1 25.9 26.1l7.9-12.6s-10.7-5.7-19.3-18.8c-1.7-2.7-3.5-5-4.6-7.5-1.1-2.3-1.9-4.2-2.6-6.1-.5-1.5-.9-2.8-1.2-3.9-.5-1.7-.6-3.1-.7-4.8 0-.6-.1-2.9-.1-2.9v-.5-94.7H6.3ZM30.2 112.8V208s0 .4.1.8c0 .5.1 1.2.2 1.7 0 .4.1.7.2 1 .3 1.5.6 2.8 1.3 4.8 1.1 3.2 2.9 7.1 5.7 11.6 7.1 11.4 17.2 16.6 17.2 16.6l7.9-12.3s-2.6-1.5-5.8-4.5c-2.1-2-4.6-4.7-6.8-7.9-2.1-3.2-3.4-6.5-4.1-9-.6-2-.7-3.7-.7-4.8v-93.2H30.2ZM178.1 112.8V207s0 1 0 1.3c0 1-.1 2-.2 2.8-1 10.1-4.2 17.6-10.1 27.4-9.3 15.4-25.9 26.1-25.9 26.1L134 252s10.7-5.7 19.3-18.8c1.7-2.7 3.5-5 4.6-7.5 1.1-2.3 1.9-4.2 2.6-6.1.5-1.5.9-2.8 1.2-3.9.5-1.7.6-3.1.7-4.8 0-.6.1-2.9.1-2.9v-.5-94.7h15.6ZM154.1 112.8V208s0 .4-.1.8c0 .5-.1 1.2-.2 1.7 0 .4-.1.7-.2 1-.3 1.5-.6 2.8-1.3 4.8-1.1 3.2-2.9 7.1-5.7 11.6-7.1 11.4-17.2 16.6-17.2 16.6l-7.9-12.3s2.6-1.5 5.8-4.5c2.1-2 4.6-4.7 6.8-7.9 2.1-3.2 3.4-6.5 4.1-9 .6-2 .7-3.7.7-4.8v-93.2h15.2Z"></path>
    </svg>
  `,
  eth: `
    <svg viewBox="0 0 120 20" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M43.6892 7.59685H39.3218L40.8555 0H3.90295L0 19.6252H14.7315L15.7334 14.5606H7.02833L7.52612 12.0283H16.2369L17.1209 7.59685H8.43034L8.92687 5.06457H22.7592L19.8638 19.6252H25.8707L28.7649 5.06457H33.8077L30.9135 19.6252H36.9665L38.4642 12.0283H42.8303L41.3338 19.6252H47.3577L51.2632 0H45.2229L43.6892 7.59685ZM69.4622 2.53228H71.4717L71.9695 0H69.9695L69.4622 2.53228ZM74.616 2.53228H76.6267L77.1232 0H75.1232L74.616 2.53228ZM93.4111 2.53228H95.4205L95.9196 0H93.9183L93.4111 2.53228ZM103.47 6.27247C99.9631 6.27247 97.5024 8.76677 96.7148 13.1172C96.5907 13.7981 96.5275 14.4888 96.5258 15.181C96.5258 18.1527 98.3109 20 101.189 20C102.013 20.0022 102.829 19.8372 103.588 19.515C104.347 19.1928 105.033 18.7199 105.606 18.1248L105.623 18.1058L104.509 16.7333L104.489 16.7093L104.467 16.7321C104.087 17.2105 103.604 17.597 103.055 17.8628C102.506 18.1287 101.905 18.2671 101.295 18.2679C99.9234 18.2679 98.4571 17.4411 98.4571 15.1266C98.4621 14.4552 98.5331 13.786 98.6688 13.1286C98.8751 11.7182 99.4666 10.3928 100.378 9.29981C100.745 8.89298 101.193 8.56784 101.694 8.34522C102.194 8.1226 102.734 8.00742 103.281 8.00708C103.806 7.9833 104.326 8.10937 104.782 8.37067C105.238 8.63197 105.611 9.0178 105.858 9.4834L105.874 9.50999L107.293 8.29956L107.313 8.28183L107.298 8.26031C106.89 7.62018 106.321 7.09939 105.649 6.75041C104.977 6.40142 104.225 6.23657 103.47 6.27247ZM116.295 5.98822C115.59 5.9532 114.886 6.07022 114.23 6.33141C113.573 6.59261 112.98 6.99193 112.49 7.50252L113.998 0H112.054L108.15 19.6252H110.093L111.714 11.3807C112.408 7.90642 115.092 7.73043 115.621 7.73043C115.937 7.69809 116.256 7.73604 116.555 7.84158C116.855 7.94713 117.128 8.11768 117.354 8.3411C117.581 8.56453 117.755 8.83536 117.866 9.13432C117.977 9.43329 118.02 9.75306 117.994 10.0709C117.984 10.4893 117.939 10.9062 117.858 11.3168L116.209 19.6252H118.15L119.855 11.1364C119.943 10.6954 119.989 10.2471 119.991 9.79741C120.026 9.29629 119.955 8.79341 119.783 8.32176C119.611 7.85011 119.342 7.42034 118.993 7.06064C118.644 6.70095 118.223 6.41946 117.758 6.23464C117.293 6.04981 116.795 5.96584 116.295 5.98822ZM90.0967 19.5929L90.0904 19.6258H92.0066L94.6215 6.33134H92.7375L90.0967 19.5929ZM54.9538 8.19447L54.9481 8.23056H61.4522L52.8769 18.021L52.8731 18.0261L52.5511 19.6258H61.7868L62.1503 17.7266H55.2462L63.8466 7.93618L63.8504 7.92985L64.1736 6.33134H55.3129L54.9538 8.19447ZM86.9064 6.16928C86.2145 6.15103 85.5279 6.29363 84.8999 6.58596C84.272 6.87828 83.7198 7.31243 83.2864 7.85451L83.5838 6.3611L83.5888 6.33134H81.6985L79.0854 19.5929L79.0803 19.6258H80.999L82.597 11.4909C83.006 9.4049 84.5932 7.88996 86.3739 7.88996C86.7328 7.88131 87.0882 7.96143 87.4089 8.12327C87.7297 8.28511 88.0059 8.52371 88.2133 8.81805L88.2322 8.8421L89.7879 7.43415L89.7728 7.41516C89.4206 7.00234 88.9794 6.67558 88.4828 6.4597C87.9861 6.24383 87.447 6.1445 86.9064 6.16928ZM75.3318 6.33134H77.275L77.27 6.363L74.6588 19.6258H72.7678L72.7741 19.5929L73.0243 18.2128C72.5408 18.7377 71.9491 19.1504 71.2906 19.422C70.6321 19.6935 69.9226 19.8176 69.2114 19.7854C68.7188 19.8075 68.227 19.7247 67.7685 19.5423C67.31 19.3599 66.8951 19.0821 66.5511 18.727C66.2071 18.372 65.9418 17.9479 65.7726 17.4825C65.6033 17.0171 65.5341 16.521 65.5694 16.0268C65.5748 15.6225 65.6206 15.2198 65.7061 14.8246L65.7282 14.7043L67.3803 6.33134H69.2978L67.6677 14.5283C67.5904 14.9334 67.5468 15.3442 67.5372 15.7565C67.5127 16.0718 67.5576 16.3887 67.6687 16.6847C67.7798 16.9806 67.9545 17.2483 68.1802 17.4688C68.406 17.6892 68.6773 17.857 68.9749 17.9602C69.2724 18.0635 69.589 18.0995 69.902 18.0659C70.4219 18.0659 73.0457 17.8912 73.7306 14.4619L75.3318 6.33134Z"></path>
    </svg>
  `
};

const publicationState = {
  filter: "featured",
  view: "list"
};

const projectState = {
  filter: "featured",
  view: "list"
};

const appendHighlightedList = (node, items, highlightedItems = []) => {
  node.replaceChildren();
  items.forEach((item, index) => {
    if (index > 0) {
      node.appendChild(document.createTextNode(", "));
    }
    if (highlightedItems.includes(item)) {
      const span = document.createElement("span");
      span.className = "publication-author-self";
      span.textContent = item;
      node.appendChild(span);
      return;
    }
    node.appendChild(document.createTextNode(item));
  });
};

const getPaperByAnchor = (href) => {
  if (!href?.startsWith("#paper-")) return null;
  return (siteData.researchPapers ?? []).find((paper) => paper.id === href.slice(1)) ?? null;
};

const getPrimaryLink = (item) => item.links?.find((link) => link.href) ?? null;

const appendLinkedTitle = (heading, item, className) => {
  const primaryLink = getPrimaryLink(item);
  if (!primaryLink) {
    heading.textContent = item.title;
    return;
  }

  const anchor = document.createElement("a");
  anchor.className = className;
  anchor.href = primaryLink.href;
  anchor.textContent = item.title;
  anchor.setAttribute("aria-label", `${item.title} (${primaryLink.label})`);
  if (primaryLink.external) {
    anchor.target = "_blank";
    anchor.rel = "noreferrer";
  }
  heading.appendChild(anchor);
};

const getNewsPaperPreview = () => {
  let preview = document.getElementById("news-paper-preview");
  if (preview) return preview;

  preview = document.createElement("div");
  preview.id = "news-paper-preview";
  preview.className = "news-paper-preview";
  preview.setAttribute("aria-hidden", "true");

  const image = document.createElement("img");
  image.alt = "";
  preview.appendChild(image);
  document.body.appendChild(preview);
  return preview;
};

const positionNewsPaperPreview = (anchor, preview) => {
  const rect = anchor.getBoundingClientRect();
  const gap = 10;
  const margin = 12;
  const previewWidth = preview.offsetWidth;
  const previewHeight = preview.offsetHeight;
  const centeredLeft = rect.left + rect.width / 2 - previewWidth / 2;
  const left = Math.min(
    window.innerWidth - previewWidth - margin,
    Math.max(margin, centeredLeft)
  );
  const preferredTop = rect.top - previewHeight - gap;
  const top =
    preferredTop > margin
      ? preferredTop
      : Math.min(window.innerHeight - previewHeight - margin, rect.bottom + gap);

  preview.style.left = `${left}px`;
  preview.style.top = `${Math.max(margin, top)}px`;
};

const showNewsPaperPreview = (anchor) => {
  const src = anchor.dataset.previewSrc;
  if (!src) return;

  const preview = getNewsPaperPreview();
  const image = preview.querySelector("img");
  image.src = src;
  image.alt = anchor.dataset.previewAlt ?? "";
  positionNewsPaperPreview(anchor, preview);
  preview.classList.add("is-visible");
};

const hideNewsPaperPreview = () => {
  document.getElementById("news-paper-preview")?.classList.remove("is-visible");
};

const appendLinkedText = (node, text, links = []) => {
  let cursor = 0;
  links.forEach((link) => {
    if (!link.text || !link.href) return;
    const index = text.indexOf(link.text, cursor);
    if (index === -1) return;
    node.append(document.createTextNode(text.slice(cursor, index)));
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.text;
    if (link.href.startsWith("#paper-")) {
      const paper = getPaperByAnchor(link.href);
      if (paper?.image?.src) {
        anchor.classList.add("news-paper-link");
        anchor.dataset.previewSrc = paper.image.src;
        anchor.dataset.previewAlt = paper.image.alt ?? paper.title;
        anchor.addEventListener("mouseenter", () => showNewsPaperPreview(anchor));
        anchor.addEventListener("focus", () => showNewsPaperPreview(anchor));
        anchor.addEventListener("mouseleave", hideNewsPaperPreview);
        anchor.addEventListener("blur", hideNewsPaperPreview);
      }
      anchor.addEventListener("click", (event) => {
        hideNewsPaperPreview();
        const targetId = link.href.slice(1);
        if (!document.getElementById(targetId)) {
          publicationState.filter = "all";
          renderPublications();
        }
        const target = document.getElementById(targetId);
        if (!target) return;
        event.preventDefault();
        window.history.pushState(null, "", link.href);
        target.scrollIntoView({ block: "start" });
        target.focus({ preventScroll: true });
      });
    }
    node.appendChild(anchor);
    cursor = index + link.text.length;
  });
  node.append(document.createTextNode(text.slice(cursor)));
};

const getFilteredPapers = () => {
  const papers = siteData.researchPapers ?? [];
  if (publicationState.filter === "all") return papers;
  if (publicationState.filter === "featured") {
    return papers.filter((paper) => paper.featured);
  }
  return papers.filter((paper) => paper.type === publicationState.filter);
};

const getFilteredProjects = () => {
  const projects = siteData.experienceItems ?? [];
  if (projectState.filter === "all") return projects;
  if (projectState.filter === "featured") {
    return projects.filter((project) => project.featured);
  }
  return projects;
};

const renderHero = () => {
  setText("profile-kicker", siteData.profile.kicker);
  setText("hero-title", siteData.profile.name);
  setText("profile-role", siteData.profile.role);
  const summary = document.getElementById("profile-summary");
  if (summary) {
    summary.innerHTML = siteData.profile.summaryHtml ?? siteData.profile.summary;
  }
  setText("availability-notice", siteData.availabilityNotice);

  const focusList = document.getElementById("research-focus");
  focusList.innerHTML = "";
  const focusItems = siteData.researchFocus ?? [];
  focusList.hidden = focusItems.length === 0;
  focusItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    focusList.appendChild(li);
  });

  const heroLinks = document.getElementById("hero-links");
  heroLinks.innerHTML = "";
  siteData.heroLinks.filter((link) => !link.hidden).forEach((link) => {
    const a = document.createElement("a");
    a.className = `button button-${link.kind ?? "secondary"}`;
    a.href = link.href;
    if (link.icon && icons[link.icon]) {
      const tooltipLabel = link.tooltipLabel ?? link.label;
      a.classList.add("button-icon");
      a.classList.add(`button-icon-${link.icon}`);
      a.setAttribute("aria-label", tooltipLabel);
      a.title = tooltipLabel;
      a.innerHTML = `${icons[link.icon]}<span class="visually-hidden">${tooltipLabel}</span>`;
    } else {
      a.textContent = link.label;
    }
    if (link.external) {
      a.target = "_blank";
      a.rel = "noreferrer";
    }
    heroLinks.appendChild(a);
  });
};

const renderNews = () => {
  const container = document.getElementById("news-list");
  container.innerHTML = "";
  siteData.news.forEach((item) => {
    const article = document.createElement("article");
    article.className = "news-item";
    const date = document.createElement("p");
    date.className = "news-date";
    date.textContent = item.date;
    const summary = document.createElement("p");
    summary.className = "news-summary";
    appendLinkedText(summary, item.title, item.links ?? []);
    article.append(date, summary);
    container.appendChild(article);
  });
};

const renderPublicationFilters = () => {
  const container = document.getElementById("publication-filters");
  if (!container) return;

  container.innerHTML = "";
  (siteData.publicationFilters ?? []).forEach((filter) => {
    const button = document.createElement("button");
    const isActive = filter.value === publicationState.filter;
    button.type = "button";
    button.className = "publication-control publication-filter";
    button.dataset.publicationFilter = filter.value;
    button.textContent = filter.label;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      publicationState.filter = filter.value;
      renderPublications();
    });
    container.appendChild(button);
  });
};

const renderProjectFilters = () => {
  const container = document.getElementById("project-filters");
  if (!container) return;

  container.innerHTML = "";
  (siteData.projectFilters ?? []).forEach((filter) => {
    const button = document.createElement("button");
    const isActive = filter.value === projectState.filter;
    button.type = "button";
    button.className = "publication-control publication-filter";
    button.dataset.projectFilter = filter.value;
    button.textContent = filter.label;
    button.setAttribute("aria-pressed", String(isActive));
    button.classList.toggle("is-active", isActive);
    button.addEventListener("click", () => {
      projectState.filter = filter.value;
      renderExperience();
    });
    container.appendChild(button);
  });
};

const updatePublicationControls = () => {
  document.querySelectorAll("[data-view-mode]").forEach((button) => {
    const isActive = button.dataset.viewMode === publicationState.view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const updateProjectControls = () => {
  document.querySelectorAll("[data-project-view-mode]").forEach((button) => {
    const isActive = button.dataset.projectViewMode === projectState.view;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const renderPublications = () => {
  const list = document.getElementById("publication-list");
  const count = document.getElementById("publication-count");
  if (!list) return;

  const papers = getFilteredPapers();
  renderPublicationFilters();
  updatePublicationControls();

  list.className = `publication-list is-${publicationState.view}`;
  list.innerHTML = "";

  if (count) {
    count.textContent = `Showing ${papers.length} paper${papers.length === 1 ? "" : "s"}`;
  }

  if (!papers.length) {
    const empty = document.createElement("p");
    empty.className = "publication-empty";
    empty.textContent = "No papers match this filter yet.";
    list.appendChild(empty);
    return;
  }

  papers.forEach((paper) => {
    const article = document.createElement("article");
    article.className = "publication-card";
    if (paper.id) {
      article.id = paper.id;
      article.tabIndex = -1;
    }

    const meta = document.createElement("div");
    meta.className = "publication-meta";

    const type = document.createElement("p");
    type.className = "publication-type";
    type.textContent = paper.typeLabel ?? paper.type;

    const date = document.createElement("p");
    date.className = "publication-date";
    date.textContent = paper.date;
    meta.append(type, date);

    const figure = document.createElement("figure");
    figure.className = "publication-figure";
    const image = document.createElement("img");
    image.src = paper.image?.src ?? "/assets/images/paper-placeholder.svg";
    image.alt = paper.image?.alt ?? "";
    image.loading = "eager";
    image.decoding = "async";
    figure.appendChild(image);

    const body = document.createElement("div");
    body.className = "publication-body";

    const title = document.createElement("h3");
    appendLinkedTitle(title, paper, "publication-title-link");

    const authors = document.createElement("p");
    authors.className = "publication-authors";
    appendHighlightedList(authors, paper.authors ?? [], paper.highlightedAuthors ?? []);

    const venue = document.createElement("p");
    venue.className = "publication-venue";
    venue.textContent = paper.venue;

    body.append(title, authors);

    if (paper.summary) {
      const summary = document.createElement("p");
      summary.className = "publication-summary";
      summary.textContent = paper.summary;
      body.appendChild(summary);
    }

    body.appendChild(venue);

    if (paper.tags?.length) {
      const tags = document.createElement("ul");
      tags.className = "tag-list publication-tags";
      tags.setAttribute("aria-label", `Keywords for ${paper.title}`);
      paper.tags.forEach((tag) => {
        const li = document.createElement("li");
        li.textContent = tag;
        tags.appendChild(li);
      });
      body.appendChild(tags);
    }

    article.append(meta, figure, body);
    list.appendChild(article);
  });
};

const renderExperience = () => {
  const container = document.getElementById("experience-list");
  const count = document.getElementById("project-count");
  if (!container) return;

  const projects = getFilteredProjects();
  renderProjectFilters();
  updateProjectControls();

  container.className = `project-list is-${projectState.view}`;
  container.innerHTML = "";

  if (count) {
    count.textContent = `Showing ${projects.length} project${projects.length === 1 ? "" : "s"}`;
  }

  projects.forEach((item) => {
    const article = document.createElement("article");
    article.className = "project-card";

    const meta = document.createElement("div");
    meta.className = "project-meta";

    const org = document.createElement("p");
    org.className = "project-type";
    org.textContent = item.org;

    const period = document.createElement("p");
    period.className = "project-date";
    period.textContent = item.period;
    meta.append(org, period);

    const figure = document.createElement("figure");
    figure.className = "project-figure";
    const image = document.createElement("img");
    image.src = item.image?.src ?? "/assets/images/paper-placeholder.svg";
    image.alt = item.image?.alt ?? "";
    image.loading = "lazy";
    image.decoding = "async";
    figure.appendChild(image);

    const body = document.createElement("div");
    body.className = "project-body";

    const title = document.createElement("h3");
    appendLinkedTitle(title, item, "project-title-link");

    const context = document.createElement("p");
    context.className = "project-context";
    context.textContent = `${item.location} · ${item.supervisor}`;

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = item.description;

    body.append(title, context, description);

    if (item.tags?.length) {
      const tags = document.createElement("ul");
      tags.className = "tag-list project-tags";
      tags.setAttribute("aria-label", `Keywords for ${item.title}`);
      item.tags.forEach((tag) => {
        const li = document.createElement("li");
        li.textContent = tag;
        tags.appendChild(li);
      });
      body.appendChild(tags);
    }

    article.append(meta, figure, body);
    container.appendChild(article);
  });
};

const renderEducation = () => {
  const container = document.getElementById("education-list");
  container.innerHTML = "";
  siteData.educationItems.forEach((item) => {
    const article = document.createElement("article");
    article.className = "education-item";
    const icon = item.schoolIcon ? schoolIcons[item.schoolIcon] ?? "" : "";
    article.innerHTML = `
      ${icon ? `<span class="education-icon education-icon-${item.schoolIcon}">${icon}</span>` : '<span class="education-icon" aria-hidden="true"></span>'}
      <div class="education-copy">
        <p class="education-period">${item.period}</p>
        <div class="education-school">
          <div>
            <p class="education-institution">${item.institution}</p>
            <p class="education-location">${item.location}</p>
          </div>
        </div>
        <h3>${item.degree}</h3>
      </div>
    `;
    container.appendChild(article);
  });
};

const renderAwards = () => {
  const container = document.getElementById("awards-list");
  container.innerHTML = "";
  const list = document.createElement("ul");
  list.className = "award-list";
  siteData.awardItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <p class="award-date">${item.date}</p>
      <p class="award-title">${item.title}</p>
      <p class="award-issuer">${item.issuer}</p>
    `;
    list.appendChild(li);
  });
  container.appendChild(list);
};

const setupNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = [...document.querySelectorAll(".nav-links a")];

  toggle?.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open", !expanded);
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("is-open");
    });
  });

  const sections = [...document.querySelectorAll(".section-observed")];
  sections.forEach((section) => {
    if (section.getBoundingClientRect().top < window.innerHeight * 0.9) {
      section.classList.add("is-visible");
    }
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          links.forEach((link) => {
            const targetId =
              link.dataset.section ?? link.getAttribute("href")?.replace("#", "");
            const sectionId = entry.target.dataset.navSection ?? entry.target.id;
            const isMatch = targetId === sectionId;
            link.classList.toggle("is-active", isMatch);
          });
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "-6% 0px -22% 0px"
    }
  );

  sections.forEach((section) => observer.observe(section));
};

const setupResearch = () => {
  document.querySelectorAll("[data-view-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      publicationState.view = button.dataset.viewMode;
      renderPublications();
    });
  });
  renderPublications();
};

const setupProjects = () => {
  document.querySelectorAll("[data-project-view-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      projectState.view = button.dataset.projectViewMode;
      renderExperience();
    });
  });
  renderExperience();
};

const setupImageStack = () => {
  const container = document.getElementById("imageStackContainer");
  if (!container) return;

  const wrappers = Array.from(container.children);
  wrappers.forEach((wrapper) => container.appendChild(wrapper));
};

const init = () => {
  renderHero();
  renderNews();
  setupResearch();
  setupProjects();
  renderEducation();
  renderAwards();
  setupImageStack();
  setupNavigation();
};

init();
