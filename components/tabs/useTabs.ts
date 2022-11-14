import { ref } from "vue";
import { unrefElement } from "@vueuse/core";

const useTabs = (tablist: HTMLElement) => {
  const tablistNode = unrefElement(tablist);

  const tabs = ref<HTMLElement[]>([]);

  const firstTab = ref();
  const lastTab = ref();

  tabs.value = Array.from(tablistNode?.querySelectorAll("[role=tab]")!);
  const tabpanels = ref<HTMLElement[]>([]);

  const setSelectedTab = (currentTab: EventTarget) => {
    for (var i = 0; i < tabs.value.length; i += 1) {
      var tab = tabs.value[i];
      if (currentTab === tab) {
        tab.setAttribute("aria-selected", "true");
        tab.removeAttribute("tabindex");
      } else {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
      }
    }
  };

  const moveFocusToTab = (currentTab: EventTarget) => {
    let c = currentTab as HTMLElement;
    c.focus();
  };

  const moveFocusToPreviousTab = (currentTab: EventTarget) => {
    var index;

    if (currentTab === firstTab.value) {
      moveFocusToTab(lastTab.value);
    } else {
      index = tabs.value.indexOf(currentTab as HTMLElement);
      moveFocusToTab(tabs.value[index - 1]);
    }
  };

  const moveFocusToNextTab = (currentTab: EventTarget) => {
    var index;

    if (currentTab === lastTab.value) {
      moveFocusToTab(firstTab.value);
    } else {
      index = tabs.value.indexOf(currentTab as HTMLElement);
      moveFocusToTab(tabs.value[index + 1]);
    }
  };

  /* EVENT HANDLERS */

  const onKeydown = (event: KeyboardEvent) => {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case "ArrowLeft":
        moveFocusToPreviousTab(tgt!);
        flag = true;
        break;

      case "ArrowRight":
        moveFocusToNextTab(tgt!);
        flag = true;
        break;

      case "Home":
        moveFocusToTab(firstTab.value);
        flag = true;
        break;

      case "End":
        moveFocusToTab(lastTab.value);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  };

  // Since this example uses buttons for the tabs, the click onr also is activated
  // with the space and enter keys
  const onClick = (event: Event) => {
    setSelectedTab(event.currentTarget!);
  };

  for (var i = 0; i < tabs.value.length; i += 1) {
    let tab: HTMLElement = tabs.value[i];
    let tabpanel = document.getElementById(tab.getAttribute("aria-controls")!);

    tab.tabIndex = -1;
    tab.setAttribute("aria-selected", "false");
    tabpanels.value.push(tabpanel!);

    tab.addEventListener("keydown", onKeydown);
    tab.addEventListener("click", onClick);

    if (!firstTab.value) {
      firstTab.value = tab;
    }
    lastTab.value = tab;
  }

  setSelectedTab(firstTab.value);
};

export default useTabs;
