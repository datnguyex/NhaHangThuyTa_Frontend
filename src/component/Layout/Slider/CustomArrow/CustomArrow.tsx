import { ArrowLeftBlack, ArrowWhiteLeft, ArrowWhiteRight } from '~/component/Icon';

interface CustomArrowProps {
    onClick: () => void; // Ensure both components receive the onClick function as a prop
}

export const CustomArrowNextMenu = ({ onClick }: CustomArrowProps) => {
    return (
        <div
            className="customNextBtn"
            style={{
                position: 'absolute',
                top: '32%',
                transform: 'rotate(180deg)',
                right: '-50px',
                color: 'red',
                width: '50px',
                height: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick} // Make sure to use the onClick prop correctly
        >
            <ArrowLeftBlack />
        </div>
    );
};

export const CustomArrowPrevMenu = ({ onClick }: CustomArrowProps) => {
    return (
        <div
            className="customPrevBtn"
            style={{
                position: 'absolute',
                top: '32%',
                left: '-50px',
                color: 'red',
                width: '50px',
                height: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick} // Ensure to use the passed onClick prop here as well
        >
            <ArrowLeftBlack />
        </div>
    );
};
export const CustomArrowPrevHome = ({ onClick }: CustomArrowProps) => {
    return (
        <div
            className="customNextBtn"
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '60px',
                color: 'red',
                width: '50px',
                height: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick}
        >
            <ArrowWhiteRight />
        </div>
    );
};
export const CustomArrowNextHome = ({ onClick }: CustomArrowProps) => {
    return (
        <div
            className="customPrevBtn"
            style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: '60px',
                color: 'red',
                width: '50px',
                height: '50px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 10,
            }}
            onClick={onClick}
        >
            <ArrowWhiteLeft />
        </div>
    );
};
