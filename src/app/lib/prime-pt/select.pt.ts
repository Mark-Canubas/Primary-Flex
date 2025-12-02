import { contentChild, signal } from "@angular/core";
import { PassThroughContext } from "primeng/api";
import { Select, SelectPassThrough } from "primeng/select";

export const SelectPt: SelectPassThrough = {
    root: (context: PassThroughContext<Select>) => {
        const instance = context.instance as any;
        if (window.innerWidth >= 1280) instance.$appendTo = signal('self');
        else instance.$appendTo = signal('body');

        const overlay = document.querySelector('.p-select-overlay');

        if (instance.$appendTo() === 'body' && !document.querySelector('.select-cancel-option')) {
            const cancel = document.createElement('div');
            cancel.className =
                'select-cancel-option sticky bottom-0 bg-white text-gray-500 border-t border-gray-200 ' +
                'text-start p-3 font-medium cursor-pointer z-[99] hover:bg-gray-100 mt-auto';
            cancel.textContent = 'Cancel';

            cancel.addEventListener('click', () => {
                instance.hide();
                instance.writeValue(null);
            });
            overlay?.appendChild(cancel);
        }
    },
    pcOverlay: {
        root: 'w-full! max-xl:h-full! max-xl:top-0! max-xl:left-0! max-xl:bg-black/40 max-xl:mt-0!',
        content: 'max-xl:max-h-full! max-xl:absolute max-xl:bottom-0 max-sm:w-full max-xl:w-[60vw]' +
            'transform max-xl:left-1/2! max-xl:-translate-x-1/2! [&>.p-select-overlay]:h-full! [&>.p-select-overlay]:overflow-hidden! max-xl:[&>.p-select-overlay]:rounded-b-none!' +
            ' max-xl:[&>.p-select-overlay]:h-[80vh]! max-xl:[&>.p-select-overlay]:flex! max-xl:[&>.p-select-overlay]:flex-col!',

    },
    listContainer: 'max-xl:max-h-full! max-xl:flex-1! px-0! [&>.p-select-list]:px-0!',
    optionLabel: 'whitespace-normal break-words hyphen-auto! w-full!',
};