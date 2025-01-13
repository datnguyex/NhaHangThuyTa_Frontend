interface IconType {
    width?: string;
    height?: string;
}
export const MagnifyingGlassGrey: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M22.16 22.16L16.9333 16.9333M2 10.7111C2 11.8551 2.22532 12.9878 2.66309 14.0447C3.10087 15.1016 3.74252 16.0619 4.55142 16.8708C5.36033 17.6797 6.32063 18.3214 7.37751 18.7591C8.43439 19.1969 9.56715 19.4222 10.7111 19.4222C11.8551 19.4222 12.9878 19.1969 14.0447 18.7591C15.1016 18.3214 16.0619 17.6797 16.8708 16.8708C17.6797 16.0619 18.3214 15.1016 18.7591 14.0447C19.1969 12.9878 19.4222 11.8551 19.4222 10.7111C19.4222 9.56715 19.1969 8.43439 18.7591 7.37751C18.3214 6.32063 17.6797 5.36033 16.8708 4.55142C16.0619 3.74252 15.1016 3.10087 14.0447 2.66309C12.9878 2.22532 11.8551 2 10.7111 2C9.56715 2 8.43439 2.22532 7.37751 2.66309C6.32063 3.10087 5.36033 3.74252 4.55142 4.55142C3.74252 5.36033 3.10087 6.32063 2.66309 7.37751C2.22532 8.43439 2 9.56715 2 10.7111Z"
                stroke="#929292"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
export const LocationWhite: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.8797 8.5C18.9197 -0.159998 6.08971 -0.169998 4.11971 8.49C2.96971 13.57 6.12971 17.88 8.88971 20.54C9.85764 21.4735 11.15 21.9952 12.4947 21.9952C13.8395 21.9952 15.1318 21.4735 16.0997 20.54C18.8697 17.88 22.0297 13.58 20.8797 8.5ZM13.6941 13.1927C13.3156 13.3495 12.9099 13.4302 12.5001 13.4302C11.6727 13.4302 10.8791 13.1015 10.294 12.5164C9.70884 11.9312 9.38013 11.1377 9.38013 10.3102C9.38013 9.48271 9.70884 8.68913 10.294 8.10401C10.8791 7.5189 11.6727 7.19019 12.5001 7.19019C12.9099 7.19019 13.3156 7.27089 13.6941 7.42768C14.0726 7.58448 14.4166 7.81429 14.7063 8.10401C14.996 8.39373 15.2258 8.73768 15.3826 9.11621C15.5394 9.49475 15.6201 9.90046 15.6201 10.3102C15.6201 10.7199 15.5394 11.1256 15.3826 11.5042C15.2258 11.8827 14.996 12.2266 14.7063 12.5164C14.4166 12.8061 14.0726 13.0359 13.6941 13.1927Z"
                fill="white"
            />
        </svg>
    );
};
export const TelephoneWhite: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M20.47 16.83C20.47 17.19 20.39 17.56 20.22 17.92C20.05 18.28 19.83 18.62 19.54 18.94C19.05 19.48 18.51 19.87 17.9 20.12C17.3 20.37 16.65 20.5 15.95 20.5C14.93 20.5 13.84 20.26 12.69 19.77C11.54 19.28 10.39 18.62 9.25 17.79C8.08811 16.9401 6.99169 16.0041 5.97 14.99C4.95877 13.972 4.0261 12.8789 3.18 11.72C2.36 10.58 1.7 9.44 1.22 8.31C0.74 7.17 0.5 6.08 0.5 5.04C0.5 4.36 0.62 3.71 0.86 3.11C1.1 2.5 1.48 1.94 2.01 1.44C2.65 0.81 3.35 0.5 4.09 0.5C4.37 0.5 4.65 0.56 4.9 0.68C5.16 0.8 5.39 0.98 5.57 1.24L7.89 4.51C8.07 4.76 8.2 4.99 8.29 5.21C8.38 5.42 8.43 5.63 8.43 5.82C8.43 6.06 8.36 6.3 8.22 6.53C8.09 6.76 7.9 7 7.66 7.24L6.9 8.03C6.79 8.14 6.74 8.27 6.74 8.43C6.74 8.51 6.75 8.58 6.77 8.66C6.8 8.74 6.83 8.8 6.85 8.86C7.03 9.19 7.34 9.62 7.78 10.14C8.23 10.66 8.71 11.19 9.23 11.72C9.77 12.25 10.29 12.74 10.82 13.19C11.34 13.63 11.77 13.93 12.11 14.11C12.16 14.13 12.22 14.16 12.29 14.19C12.37 14.22 12.45 14.23 12.54 14.23C12.71 14.23 12.84 14.17 12.95 14.06L13.71 13.31C13.96 13.06 14.2 12.87 14.43 12.75C14.66 12.61 14.89 12.54 15.14 12.54C15.33 12.54 15.53 12.58 15.75 12.67C15.97 12.76 16.2 12.89 16.45 13.06L19.76 15.41C20.02 15.59 20.2 15.8 20.31 16.05C20.41 16.3 20.47 16.55 20.47 16.83Z"
                fill="white"
            />
        </svg>
    );
};
export const ArrowWhiteRight: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_86)">
                <g filter="url(#filter0_d_1_86)">
                    <path
                        d="M8.33342 50.0003C8.33342 26.9878 26.9876 8.33366 50.0001 8.33366C73.0126 8.33366 91.6667 26.9878 91.6667 50.0003C91.6667 73.0128 73.0126 91.667 50.0001 91.667C26.9876 91.667 8.33342 73.0128 8.33342 50.0003Z"
                        fill="white"
                        fill-opacity="0.3"
                        shape-rendering="crispEdges"
                    />
                </g>
                <path
                    d="M44.7501 64.708L59.4167 49.9997L44.7501 35.2913"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1_86"
                    x="-7.6665"
                    y="-7.66602"
                    width="115.333"
                    height="115.333"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_86" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_86" result="shape" />
                </filter>
                <clipPath id="clip0_1_86">
                    <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="matrix(-1.19249e-08 -1 -1 1.19249e-08 100 100)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
export const ArrowWhiteLeft: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_87)">
                <g filter="url(#filter0_d_1_87)">
                    <path
                        d="M91.6667 50.0003C91.6667 26.9878 73.0125 8.33366 50 8.33366C26.9875 8.33366 8.33337 26.9878 8.33337 50.0003C8.33337 73.0128 26.9875 91.667 50 91.667C73.0125 91.667 91.6667 73.0128 91.6667 50.0003Z"
                        fill="white"
                        fill-opacity="0.3"
                        shape-rendering="crispEdges"
                    />
                </g>
                <path
                    d="M55.25 64.708L40.5834 49.9997L55.25 35.2913"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1_87"
                    x="-7.66663"
                    y="-7.66602"
                    width="115.333"
                    height="115.333"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_87" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_87" result="shape" />
                </filter>
                <clipPath id="clip0_1_87">
                    <rect width="100" height="100" fill="white" transform="translate(0 100) rotate(-90)" />
                </clipPath>
            </defs>
        </svg>
    );
};
export const ListThreeDash: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.5 18H28.5M7.5 10.5H28.5M7.5 25.5H18"
                stroke="#3F3F41"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
export const CloseYellow: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3L17 17" stroke="#C75D15" stroke-width="3" stroke-linecap="round" />
            <path d="M17 3L3 17" stroke="#C75D15" stroke-width="3" stroke-linecap="round" />
        </svg>
    );
};
export const ArrowDown: React.FC<IconType> = ({ width = '2.4rem', height = '2.4rem' }) => {
    return (
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3L7 8L12 3" stroke="#434146" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
