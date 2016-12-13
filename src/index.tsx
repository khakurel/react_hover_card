import * as React from "react";
// import * as ReactDOM from 'react-dom';

type placement =
    'top' | 'left' | 'right' | 'bottom' |
        'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
        'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';


interface HoverProps {
    children?: React.ReactElement<any>;
    title?: React.ReactNode | string,
    placement?:placement
    // todo : ITodo;
    // editing? : boolean;
    // onSave: (val: any) => void;
    // onDestroy: () => void;
    // onEdit: ()  => void;
    // onCancel: (event : any) => void;
    // onToggle: () => void;
}


export class HoverCard extends React.Component<HoverProps, {}> {
    static defaultProps = {
        prefixCls: 'sk-hover-card',
        placement: 'top'
    };

    private hoverCard = {
        target: null,
        el: null,
        portal: {},
        show: false
    };

    componentWillMount() {
        this.hoverCard.portal =  document.createElement('div');
    }


    render() {
        const children = React.Children.only(this.props.children);
        return React.cloneElement(children, {});
    }



}