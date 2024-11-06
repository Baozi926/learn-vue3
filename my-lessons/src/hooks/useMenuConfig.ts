
import { reactive, ref, watch, VueElement, h } from "vue";
import type { MenuProps, ItemType } from "ant-design-vue";


import { MailOutlined } from "@ant-design/icons-vue";

function getItem(
    label: VueElement | string,
    key: string,
    icon?: any,
    children?: ItemType[],
    type?: "group"
): ItemType {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as ItemType;
}

export function useMenuConfig() {


    const selectedKeys = ref<string[]>(["readme"]);
    const openKeys = ref<string[]>(["/reactive", '/vue3', '/css', '/javascript', '/component']);

    const menus: ItemType[] = reactive([
        getItem("前端培训手册", "/readme", () => h(MailOutlined)),
        { type: "divider" },


        getItem("vue3", "/vue3", null, [
            getItem("响应式基础", "/reactive", null, [
                getItem("Ref基础", "/reactive-ref", null),
                getItem("监听Ref变化", "/case-ref-watch", null),
                getItem("Reactive", "reactive-reactive", null),
                getItem("DOM更新时机", "/reactive-time", null),
                getItem("大对象的监听时的性能问题", "/case-shallow-ref", null),
                getItem("computed", "/case-computed", null),
                
            ]),
            getItem("组件化", "/component", null, [
                getItem("组件", "/case-component", null),
                getItem("通信-prop", "/case-component-prop", null),
                getItem("通信-emit/on", "/case-component-emit", null),
                getItem("通信-provide/inject", "/case-component-provide", null),
                getItem("插槽-slot", "/case-component-slot", null),
                getItem("hooks", "/case-component-hooks", null),
            ]),
            getItem("TS", "/case-vue-ts", null),
        ]),


        getItem("css", "/css", null, [
            getItem("Flex布局", "5"),
        ]),

        getItem("Javasript", "/javascript", null, [
            getItem("深拷贝、浅拷贝", "/case-deep-copy"),
            getItem("ES特性", "/case-es6"),
            getItem("TS", "sub3", null,),
        ]),

        getItem("前端安全", "/security", null, [

        ]),
    ]);

    return {
        selectedKeys,
        openKeys,
        menus
    }

}