import React from 'react';

const getMessageHtml = (element) => {
    return { __html: element };
}

const Emoji  = ({...props, children}) => (
    <span
        dangerouslySetInnerHTML= { getMessageHtml(children) }>
    </span>
);

export default Emoji;
export {
    Emoji
};