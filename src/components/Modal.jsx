const Modal = ({children}) => {
    return (
    <div className="fixed bg-black/30 inset-0 z-50 flex flex-col justify-center items-center ">
        <div className="bg-white shadow-2xl p-4 gap-4 items-center flex flex-col w-fit rounded-2xl">
           {children}
        </div>
    </div>
)}

export default Modal