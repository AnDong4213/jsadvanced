function createElement(vnode) {
    var tag = vnode.tag, attrs = vnode.attrs || {}, children = vnode.children || [];

    if (!tag) {
        return null
    }
    var elem = document.createElement(tag), attrName;
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            elem.setAttribute(attrName, attrs[attrName])
        }
    }

    children.forEach(childVnode => {
        elem.appendChild(createElement(childVnode))  // 递归
    })

    return elem

}




