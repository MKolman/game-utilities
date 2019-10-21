import { shallowMount } from "@vue/test-utils";
import Rule from "@/components/Rule.vue";

describe("Rule.vue", () => {
  it("renders the rule title", () => {
    const img = { id: 1, desc: "Rule name", src: "tmp" };
    const wrapper = shallowMount(Rule, {
      propsData: { img }
    });
    expect(wrapper.text()).toMatch("1. Rule name");
  });
});
