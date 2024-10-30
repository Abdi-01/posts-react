"use client";
import * as React from 'react';
import axios from 'axios';

interface IPostsProps {
}

const Posts: React.FunctionComponent<IPostsProps> = (props) => {
    const [userList, setUserList] = React.useState<any[]>([]);

    const getUserList = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserList(res.data);
        } catch (error) {
            console.log(error);

        }
    }

    React.useEffect(() => {
        getUserList();
    }, [])

    const printUserList = () => {
        return userList.map((val: any) => {
            return <div key={val.id} className='flex bg-white rounded-lg py-2 mb-2 shadow-md'>
                <img className='w-10 mx-3 rounded-full shadow-md' src={`https://robohash.org/${val.username}.png`} alt='icon' />
                <div>
                    <h3 className='font-semibold'>{val.name}</h3>
                    <p className='text-xs font-extralight'>{val.phone}</p>
                </div>
            </div>
        })
    }
    return <div className='px-24 py-14 bg-slate-100 h-screen flex gap-8'>
        <div id='timeline' className='w-full'>
            <div className='flex items-center'>
                <img className='w-20 h-20 mx-3 rounded-full shadow-md' src={`https://robohash.org/random.png`} alt='icon' />
                <div className='relative w-full'>
                    <textarea className='w-full p-3 rounded-md shadow-md resize-none' rows={2} />
                    <span className='absolute right-2 bottom-2 text-sm text-gray-400'>0/350</span>
                </div>
            </div>
        </div>
        <div id='user-list' className='w-1/4'>
            {printUserList()}
        </div>
    </div>;
};

export default Posts;
