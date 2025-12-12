import { NgStyle } from '@angular/common';
import { PassThroughContext } from 'primeng/api';
import { Button, ButtonPassThrough } from 'primeng/button';

const tw = {
    baseHeight: 'h-full!',
    baseWidth: 'md:w-fit! w-full! ',
    baseText: 'md:text-base! text-xs!',

    custom: {
        // Border styles
        bordered: 'border! border-gray-400!',

        rounded: 'rounded-2xl!',
        squared: 'rounded-md!',

        iconSize: 'md:text-lg! text-xs!',
    },
};

export const ButtonPt: ButtonPassThrough = {
    root: (context: PassThroughContext<Button>) => {
        const instance = context.instance as any;

        const styleClass = instance.styleClass || '';
        // const rounded = instance.class?.includes('btn-rounded') || false;
        const hasBorder = styleClass.includes('btn-border');
        const rounded = styleClass.includes('btn-rounded');

        const base = [tw.baseText, tw.baseHeight, tw.baseWidth].join(' ');
        const classes = [
            hasBorder ? tw.custom.bordered : tw.custom.bordered,
            rounded ? tw.custom.rounded : tw.custom.squared,
        ].join(' ');

        return { class: `${base} ${classes} ${styleClass}` };
    },
    icon: (context: PassThroughContext<Button>) => {
        const instance = context.instance as any;
        const styleClass = instance.styleClass || '';
        const iconSize = styleClass.includes('btn-icon-size');

        return { class: iconSize ? tw.custom.iconSize : '' };
    }
};