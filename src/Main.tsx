import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './component/Dashboard/dashboard.component';
import { UploadFile } from './component/Dashboard/upload.component';
import Login from './component/login.component';


export const Main = () => {
    return (
        <Routes>
            <Route path='*' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/dashboard/upload' element={<UploadFile />} />
        </Routes>
    )
}