import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard1() {
    return (
        <div className='Db'>
            <h1>Hi User</h1>
            <div className='dash1'>

                <Link to="/uploadProject" className='text1'>
                    <div className='upload_project'>
                        Upload A new project
                    </div>
                </Link>
                <Link to="/studentList" className='text2'>
                    <div className='see_student_list'>
                        Student List

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Dashboard1
