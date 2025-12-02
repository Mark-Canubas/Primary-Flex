import { signal } from "@angular/core";
import { PassThroughContext } from "primeng/api";
import { MultiSelect, MultiSelectPassThrough } from "primeng/multiselect";

export const MultiSelectPt: MultiSelectPassThrough = {
    root: (context: PassThroughContext<MultiSelect>) => {
        const instance = context.instance as any;

        if (window.innerWidth >= 1280) instance.$appendTo = signal('self');
        else instance.$appendTo = signal('body');

        const overlay = document.querySelector('.p-multiselect-overlay');

        if (overlay && instance.$appendTo() === 'body' && !overlay.querySelector('.select-cancel-option')) {
            const cancel = document.createElement('div');
            cancel.className =
                'select-cancel-option sticky bottom-0 bg-white text-gray-500 border-t border-gray-200 ' +
                'text-start p-3 font-medium cursor-pointer z-[99] hover:bg-gray-100 mt-auto';
            cancel.textContent = 'Cancel';

            cancel.addEventListener('click', () => {
                instance.hide();
                instance.writeValue(null);
            });
            overlay.appendChild(cancel);
        }
    },
    overlay: (context: PassThroughContext<MultiSelect>) => {
        const instance = context.instance as any;
        if (instance.$appendTo() === 'body') {
            const overlayEl = document.querySelector('.p-component-overlay');
            const overlayContent = overlayEl?.closest('.p-overlay-content');
            const pcOverlayRoot = overlayContent?.closest('.p-overlay');

            if (pcOverlayRoot) {
                pcOverlayRoot.classList.add(
                    'w-full!', 'max-xl:h-full!', 'max-xl:top-0!', 'max-xl:left-0!',
                    'max-xl:bg-black/40', 'max-xl:mt-0!'
                );
            }

            if (overlayContent) {
                overlayContent.classList.add(
                    'max-xl:max-h-full!', 'max-xl:absolute', 'max-xl:bottom-0',
                    'max-sm:w-full', 'max-xl:w-[60vw]', 'transform',
                    'max-xl:left-1/2!', 'max-xl:-translate-x-1/2!', 'max-xl:h-[80vh]!'
                );
            }
        }
        return {
            class: 'max-xl:h-full! max-xl:overflow-hidden! max-xl:h-[80vh]! max-xl:flex! max-xl:flex-col! max-xl:rounded-b-none!'
        }
    },
    header:'px-3!',
    listContainer: 'max-xl:max-h-full! max-xl:flex-1! px-0! [&>.p-multiselect-list]:px-0!',
    option: '[&>.ng-star-inserted]:whitespace-normal [&>.ng-star-inserted]:break-words [&>.ng-star-inserted]:hyphen-auto! [&>.ng-star-inserted]:w-full!',
};