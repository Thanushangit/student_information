import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';

const AddCard = () => {

    const schema = z.object({
        fullName: z.string().nonempty("FullName is required. ").min(5,"FullName atleast contain 5 characters."),
        studentId: z.string().nonempty("studentId is required."),
        phoneNumber: z.string().nonempty("phoneNumber is required.").min(10,"Invalid phoneNumber").max(10,"Invalid phoneNumber"),
        course: z.string().nonempty("course is required."),
        year: z.string().nonempty("year is required."),
        nic: z.string().nonempty("nic is required.").min(10,"Invalid NIC number").max(10,"Invalid NIC number"),
        address: z.string().nonempty("address is required.").min(10,"Address contain atleast 10 characters."),

    })

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    function FormSubmit(data) {
        reset()
        console.log("this is the form output", data)
    }
    return (
        <div className='w-full min-h-screen bg-black/60 flex flex-col items-center justify-center backdrop-blur-2xl'>
            <h1 className='text-xl md:text-3xl my-3 text-gray-300 font-bold'>Student Details</h1>
            <form action="" className='py-2 px-5 md:py-4 md:px-10  w-full h-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3' onSubmit={handleSubmit(FormSubmit)}>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="fullName" className='text-gray-300 font-semibold text-lg'>FullName</label>
                    <input type="text" id='fullName' className='py-2 px-5 outline-0 rounded bg-gray-200' placeholder='Enter your full name' {...register("fullName")} />
                    {errors.fullName && <small className="text-sm text-red-400">{errors.fullName.message}</small>}

                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="studentId" className='text-gray-300 font-semibold text-lg'>StudetnId(eg:-ICT/xx/xxx)</label>
                    <input type="text" id='studentId' className='py-2 px-5 outline-0 rounded bg-gray-200' placeholder='Enter your student id ' {...register("studentId")} />
                    {errors.studentId && <small className="text-sm text-red-400">{errors.studentId.message}</small>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="phonenumber" className='text-gray-300 font-semibold text-lg'>Phone Number</label>
                    <input type="text" id='phonenumber' className='py-2 px-5 outline-0 rounded bg-gray-200' placeholder='Enter your phone number' {...register("phoneNumber")} />
                    {errors.phoneNumber && <small className="text-sm text-red-400">{errors.phoneNumber.message}</small>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="course" className='text-gray-300 font-semibold text-lg'>Course</label>
                    <input type="text" id='course' className='py-2 px-5 outline-0 rounded bg-gray-200' placeholder='Enter your course name' {...register("course")} />
                    {errors.course && <small className="text-sm text-red-400">{errors.course.message}</small>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="year" className='text-gray-300 font-semibold text-lg'>Year</label>
                    <input type="text" id='year' className='py-2 px-5 outline-0 rounded bg-gray-200' placeholder='Enter your year' {...register("year")} />
                    {errors.year && <small className="text-sm text-red-400">{errors.year.message}</small>}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="nic" className='text-gray-300 font-semibold text-lg'>NIC</label>
                    <input type="text" id='nic' className='py-2 px-5 outline-0 rounded bg-gray-200' placeholder='Enter your nic' {...register("nic")} />
                    {errors.nic && <small className="text-sm text-red-400">{errors.nic.message}</small>}
                </div>

                <div className='flex flex-col gap-1 md:col-span-2'>
                    <label htmlFor="address" className='text-gray-300 font-semibold text-lg'>Address</label>
                    <textarea type="text" id='address' className='py-2 px-5 outline-0 rounded bg-gray-200 resize-none' placeholder='Enter your address' {...register("address")}>

                    </textarea>
                    {errors.address && <small className="text-sm text-red-400">{errors.address.message}</small>}

                </div>

                <button className='py-2 px-4 md:py-4 md:px-8 border-0 rounded bg-amber-600 cursor-pointer text-gray-200 font-semibold text-lg md:text-xl max-w-44 hover:bg-amber-700 transition-all duration-300'>Submit</button>

            </form>

        </div>
    )
}

export default AddCard