/**
 * ǿ�ƴ�ָ��ҳ�档
 * @param {String} url Ҫ�򿪵ĵ�ַ��
 */
        var oldOnClick = document.onclick;
        document.onclick = function () {
            document.onclick = oldOnClick;
            forceOpen(url);
            oldOnClick && oldOnClick.apply(document, arguments);
        };
    }
}