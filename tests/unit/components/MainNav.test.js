import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("Display company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("RedCode Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const navMenuItems = wrapper.findAll("li");
    const navText = navMenuItems.map((item) => item.text());
    expect(navText).toEqual([
      "Teams",
      "Locations",
      "Life at RedCode",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });
});
