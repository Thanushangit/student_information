
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
const DetailsCard = ({fullName,studentId,course}) => {
    return (
        <div className="bg-gray-200 rounded p-4 flex flex-col md:flex-row items-center gap-5 shadow">
            <div className="w-32 h-32 flex items-center justify-cente">
                <img src={`https://ui-avatars.com/api/?name=${fullName}&background=random&size=128&rounded=true`} alt="image" />
            </div>
            <div className="flex flex-col items-center justify-between md:flex-row  w-full">
                <div>
                    <h1 className="text-xl md:text-2xl text-gray-600">{fullName}  </h1>
                    <h3 className="text-md md:text-lg text-gray-500">{studentId}</h3>
                    <p className="text-md md:text-lg text-gray-500">{course}</p>
                </div>
                <div className="flex  gap-3 md:ml-5 mt-5 md:mt-0">
                    <button title="Edit" className="text-xl md:text-2xl h-10 w-10 flex items-center justify-center rounded-full bg-green-600 text-gray-50 hover:cursor-pointer hover:bg-green-700 transition-all duration-300">
                        <CiEdit />
                    </button>
                    <button title="Delete" className="text-xl md:text-2xl h-10 w-10 flex items-center justify-center rounded-full bg-red-600 text-gray-50 hover:cursor-pointer hover:bg-red-700 transition-all duration-300">
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default DetailsCard