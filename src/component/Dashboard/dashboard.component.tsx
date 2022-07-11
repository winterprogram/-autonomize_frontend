
import { Dropdown } from '../common/Dropdown';
import { TextField } from '../common/TextField';
import {Link} from 'react-router-dom';
import './index.css'

export const Dashboard = () => {
    const totalCount = 10000;
    const dummyData = [
        { no: 1, name: "dkbds", link: "1", status: 'success', createdAt: new Date().toString() },
        { no: 1, name: "snbsaa", link: "1", status: 'failed', error: 'Error due to s3', createdAt: new Date().toString() },
        { no: 1, name: "Sam Watch", link: "2", status: 'success', createdAt: new Date().toString() },
        { no: 1, name: "Sam Watch", link: "1", status: 'success', createdAt: new Date().toString() }
    ]
    return (
        <div>
            <div className="flex w-full flex-row justify-between">
                <span className="text-3xl font-bold p-4">File List</span>
                <Link
                    type="button"
                    className="text-white bg-[#0EB4F3] hover:bg-[#58c7f3] font-medium rounded-lg text-sm m-4 mt-5 px-2 py-2.5 "
                    to='/dashboard/upload'
                >
                    Register File
                </Link>
            </div>

            <div className="flex flex-row justify-between align-middle mt-24 ml-10 mr-10">
                <form className="[&>*]:mr-4 flex flex-row " action="submit">
                    <TextField
                        label="Name"
                        placeHolder="Name"
                    ></TextField>
                </form>

                <div className="[&>*]:mr-2 mt-8 flex flex-row h-10">
                </div>
            </div>

            <div className="ml-10 mt-5">
                <span className="font-bold">Items:</span><span className="text-[#697274] ml-2">{totalCount}</span>
            </div>

            <div className="m-10 mt-5">
                <table className="w-full [&>*]:border">
                    <thead className="">
                        <tr className="bg-[#EFF7FD] [&>*]:p-5 [&>*]:border">
                            <th>No</th>
                            <th>Name</th>
                            <th>File Link</th>
                            <th>Status</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody className="[&>*]:border">
                        {dummyData.map((e, i) => <tr className="[&>*]:border-r-[1px]">
                            <td>{++i}</td>
                            <td>{e.name}</td>
                            <td>{e.status == 'success' ? (<span>{e.link}</span>) : (<span className='text-red-800'>{e?.error}</span>)}</td>
                            <td>{e.status == 'success' ? (<span className='text-green-800'>{e.status}</span>) : (<span className='text-red-800'>{e.status}</span>)}</td>
                            <td>{e.createdAt}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}