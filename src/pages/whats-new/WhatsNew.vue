<script setup lang="ts">
import {onMounted} from "vue";

const CHANGELOG = [
  {
    title: 'v1.2.0 — October Stable Release',
    date: '2025-10-14',
    type: 'release',
    content: `<ul><li>New: Bulk invite teammates by CSV.</li><li>Performance: Faster list rendering for large workspaces.</li><li>Docs: Improved onboarding tips.</li></ul>`
  },
  {
    title: 'Fix: Android video freezing & minor CMS UI issues',
    date: '2025-10-12',
    type: 'bugfix',
    content: `<p>Resolved a playback stall on certain Android devices and polished a few spacing/contrast glitches in the CMS.</p>`
  },
  {
    title: 'Tweak: Cleaner folder list in CMS',
    date: '2025-10-12',
    type: 'tweak',
    content: `<p>Adjusted folder density and improved keyboard navigation for quicker content ops.</p>`
  },
  {
    title: 'Feature: Increase maximum folders in CMS',
    date: '2025-10-11',
    type: 'feature',
    content: `<p>Raised the folder cap to support larger content libraries.</p>`
  },
  {
    title: 'v1.0.0 — Public Beta',
    date: '2025-09-20',
    type: 'release',
    content: `<p>Initial public beta with core features and quality-of-life improvements.</p>`
  }
];

onMounted(function() {
  // --------- RENDERING ---------
  const $list = document.getElementById('changelog');
  const $tplItem = document.getElementById('item-template');
  const $tplEmpty = document.getElementById('empty-state');
  const $filters = document.getElementById('type-filters');
  const $search = document.getElementById('search');

  const typeMeta = {
    release: {label: 'Release', cls: 'bg-blue-100 text-blue-800'},
    feature: {label: 'Feature', cls: 'bg-emerald-100 text-emerald-800'},
    bugfix: {label: 'Bug fix', cls: 'bg-rose-100 text-rose-800'},
    tweak: {label: 'Tweak', cls: 'bg-amber-100 text-amber-800'}
  };


// state
  let activeType = 'all';
  let q = '';


  function normalize(s) {
    return (s || '').toLowerCase().trim();
  }


  function sortByDateDesc(a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  }


  function matchesFilters(item) {
    const matchType = activeType === 'all' || item.type === activeType;
    if (!matchType) return false;
    if (!q) return true;
    const hay = normalize(item.title + ' ' + item.content);
    return hay.includes(q);
  }


  function render() {
    $list.innerHTML = '';
    const items = CHANGELOG.slice().sort(sortByDateDesc).filter(matchesFilters);


    if (items.length === 0) {
      $list.appendChild($tplEmpty.content.cloneNode(true));
      return;
    }


    for (const it of items) {
      const node = $tplItem.content.cloneNode(true);
      const title = node.querySelector('.item-title');
      const date = node.querySelector('.item-date');
      const badge = node.querySelector('.badge');
      const content = node.querySelector('.item-content');


      title.textContent = it.title;
      date.textContent = new Date(it.date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      });
      date.setAttribute('datetime', it.date);
      badge.textContent = typeMeta[it.type].label;
      badge.className = `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ${typeMeta[it.type].cls}`;
      content.innerHTML = it.content; // content is trusted/admin-authored


      $list.appendChild(node);
    }
  }


// chip click handling
  $filters.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-type]');
    if (!btn) return;
    activeType = btn.getAttribute('data-type');


// update chip styles
    for (const chip of $filters.querySelectorAll('.filter-chip')) {
      chip.classList.remove('bg-gray-900', 'text-white', 'shadow');
      chip.classList.add('bg-white', 'text-gray-700', 'border-gray-200');
    }
    btn.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
    btn.classList.add('bg-gray-900', 'text-white', 'shadow');


    render();
  });


// search input
  $search.addEventListener('input', (e) => {
    q = normalize(e.target.value);
    render();
  });


// initialize: preset All chip as active
  (() => {
    const first = $filters.querySelector('button[data-type="all"]');
    first.classList.remove('bg-white', 'text-gray-700', 'border-gray-200');
    first.classList.add('bg-gray-900', 'text-white', 'shadow');
    render();
  })();
})
</script>

<template>
  <main class="max-w-3xl mx-auto p-4 sm:p-6">
    <!-- Title -->
    <header class="mb-6">
      <h1 class="text-2xl font-semibold tracking-tight text-gray-900">What's new</h1>
      <p class="mt-1 text-sm text-gray-600">Releases, features, bug fixes, tweaks & more — sorted by date (newest
        first).</p>
    </header>


    <!-- Controls -->
    <section class="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <!-- Filter chips (Flowbite style) -->
      <div class="flex flex-wrap items-center gap-2" id="type-filters" aria-label="Filter by type">
        <button data-type="all"
                class="filter-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition bg-white text-gray-700 border-gray-200 shadow-sm hover:bg-gray-50">
          All
        </button>
        <button data-type="release"
                class="filter-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
          Release
        </button>
        <button data-type="feature"
                class="filter-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
          Feature
        </button>
        <button data-type="bugfix"
                class="filter-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
          Bug fix
        </button>
        <button data-type="tweak"
                class="filter-chip inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium transition bg-white text-gray-700 border-gray-200 hover:bg-gray-50">
          Tweak
        </button>
      </div>


      <!-- Search -->
      <div class="w-full sm:w-64">
        <label for="search" class="sr-only">Search</label>
        <div class="relative">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <!-- search icon -->
            <svg class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M12.9 14.32a8 8 0 111.414-1.414l3.387 3.387a1 1 0 01-1.414 1.414l-3.387-3.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clip-rule="evenodd"/>
            </svg>
          </div>
          <input id="search" type="text"
                 class="block w-full rounded-lg border border-gray-200 bg-white p-2.5 pl-9 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                 placeholder="Search updates..."/>
        </div>
      </div>
    </section>


    <!-- Changelog list -->
    <section id="changelog" class="space-y-4" aria-live="polite"></section>


    <!-- Empty state -->
    <template id="empty-state">
      <div class="rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center text-sm text-gray-500">No
        updates match your filters.
      </div>
    </template>


    <!-- Item template -->
    <template id="item-template">
      <article class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow transition">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="text-base font-semibold text-gray-900 item-title"></h3>
            <div class="mt-1 flex flex-wrap items-center gap-2">
              <span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium badge"></span>
              <time class="text-xs text-gray-500 item-date" datetime=""></time>
            </div>
          </div>
          <!-- optional chevron; can convert to accordion if desired -->
        </div>
        <div class="prose prose-sm max-w-none mt-3 text-gray-700 item-content"></div>
      </article>
    </template>
  </main>
</template>

<style scoped>

</style>