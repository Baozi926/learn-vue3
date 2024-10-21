
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
    const openKeys = ref<string[]>(["/reactive", '/vue3','/css','/javascript']);

    const menus: ItemType[] = reactive([
        getItem("简介", "/readme", () => h(MailOutlined)),
        { type: "divider" },


        getItem("vue3", "/vue3", null, [
            getItem("响应式基础", "/reactive", null, [
                getItem("Ref基础", "/reactive-ref", null),
                getItem("监听Ref变化", "/case-ref-watch", null),
                getItem("Reactive", "reactive-reactive", null),
                getItem("DOM更新时机", "/reactive-time", null),
                getItem("大对象的监听时的性能问题", "/case-shallow-ref", null),
            ])
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