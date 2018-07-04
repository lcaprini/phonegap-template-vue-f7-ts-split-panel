import routes from './routes';

const F7Config: Framework7.Parameter = {
    id      : 'io.framework7.testapp',
    name    : 'Framework7',
    version : '1.0.0',
    theme   : 'auto',
    routes  : routes,

    dialog : {
        title : 'Framework7'
    },

    lazy : {
        threshold : 0
    },

    navbar : {
        hideOnPageScroll : true
    },

    panel : {
        swipe           : 'left',
        swipeActiveArea : 40
    },

    sortable : {
        moveElements : false
    },

    statusbar : {
        scrollTopOnClick : true
    },

    touch : {
        materialRipple : false
    },

    view : {
        iosSwipeBack       : false,
        pushState          : false,
        allowDuplicateUrls : true
    }
};

export default F7Config;