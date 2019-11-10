import {css} from 'lit-element';

export class Styling {
    static get theme() {

        // language=CSS
        return css`
            :host {

                /* Inspired by https://material.io/design/color/the-color-system.html#color-theme-creation */
                /* https://material.io/design/material-theming/implementing-your-theme.html#color */
                --primary-light: #2267A3;
                --primary: #025297;
                --primary-dark: #014178;
                --primary-variant: #2587a3;
                --on-primary: #ffffff;

                --secondary-light: #fdd756;
                --secondary: #fecf2f;
                --secondary-dark: #ffc911;
                --secondary-variant: #faedc1;
                --on-secondary: #212121;

                --accent-light: #ecf3ca;
                --accent: #cce35b;
                --accent-dark: #bada18;
                --on-accent: #212121;

                --background: #eeeeee;
                --on-background: #212121;

                --surface-light: #FFFFFF;
                --surface: #FEFEFE;
                --surface-dark: #FCFCFC;
                --on-surface: #212121;
                --separator: #E4E4E4;

                /* Input, Forms, Toast*/
                --error: #ea1c24;
                --on-error: #ffffff;

                --danger-light: #fc1c21;
                --danger: #ee1c21;
                --danger-dark: #de1c21;
                --on-danger: #f8f8f8;

                --success: #129991;
                --on-success: #202124;

                --disabled: #c3c4c3;
                --on-disabled: #585858;


                /* Spacing */
                --spacing-xxs: 4px;
                --spacing-xs: 8px;
                --spacing-s: 16px;
                --spacing: 24px;
                --spacing-m: 24px;
                --spacing-l: 32px;
                --spacing-xl: 48px;
                --spacing-xxl: 96px;

                --split-master-width: 320px;
                --furo-card-background: var(--surface-light);
                --furo-app-drawer-backdrop: rgba(55, 55, 55, 0.5);
                --furo-data-table-select-color: var(--surface-light);
                --furo-data-table-background: white;


                --input-hint-color: var(--primary);
                /*--input-label-color:*/
                /*--input-label-float-color:*/
                /*--input-active-float-label-color:*/
                /*--input-activation-indicator-color:*/
                /*--input-error-activation-indicator-color:*/
                /*--input-error-text-color:*/
                /*--input-active-activation-indicator-color:*/
                /*--input-active-error-activation-indicator-color:*/
            }



        `;
    }
}
