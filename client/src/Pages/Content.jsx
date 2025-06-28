import { useEffect, useState } from "react"
import DetailsCard from "../Component/DetailsCard";
import axios from 'axios'


const Content = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axios.get("https://studentinformation.up.railway.app/student/getAllInformation")
                setData(data.data)
            } catch (err) {
                console.log("something wrong", err.message)
            }
        }
        fetchData()
    }, [])
    return (
        <div className="bg-zinc-500 min-h-screen mt-15 md:mt-20">
            {data.length <= 0 ? (
                <div className="h-full w-full flex flex-col items-center justify-center">
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/no-data-found-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--results-empty-states-pack-miscellaneous-illustrations-4009512.png?f=webp" alt="no data" className="w-44 h-44 md:h-96 md:w-96" />

                    <p className="text-xl md:text-2xl text-gray-100 font-semibold">There is no data!</p>

                </div>
            ) : (
                <div className="py-5 px-5 md:py-10 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5">

                    {data.map((item) => (
                        <DetailsCard key={item._id} fullName={item.fullName} studentId={item.studentId}  course={item.course}/>
                    ))}


                </div>
            )}
        </div>
    )
}

export default Content