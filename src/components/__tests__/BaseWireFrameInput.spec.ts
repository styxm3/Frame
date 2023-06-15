import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import BaseWireFrameInput from '../BaseWireFrameInput.vue';

describe("BaseWireFrameInput", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(BaseWireFrameInput, {
      propsData: {
        label: "Price",
        modelValue: "",
        "onUpdate:modelValue": (e:HTMLInputElement) => wrapper.setProps({ modelValue: e }),
      },
    });
  });

  it("emits input value when changed", async () => {
    // Assert input value gets the new value
    await wrapper.find("input").setValue("1000");
    expect(wrapper.props("modelValue")).toBe("1000");
  });
});