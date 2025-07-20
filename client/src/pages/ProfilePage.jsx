import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';
import { AuthContext } from '../../context/AuthContext';

const ProfilePage = () => {
    const { authUser, updateProfile } = useContext(AuthContext);

    const [selectedImg, setSelectedImg] = useState(null);
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (authUser) {
            setName(authUser.fullName || '');
            setBio(authUser.bio || '');
        }
    }, [authUser]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedImg) {
            await updateProfile({ fullName: name, bio });
            navigate('/');
            return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(selectedImg);
        reader.onload = async () => {
            const base64Image = reader.result;
            await updateProfile({ profilePic: base64Image, fullName: name, bio });
            navigate('/');
        };
    };

    return (
        <div>
            <div className='min-h-screen flex items-center justify-center bg-cover bg-no-repeat'>
                <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-evenly max-sm:flex-col-reverse rounded-lg p-6 gap-6'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5 p-10 flex-1'>
                        <h3 className='text-lg'>Profile details</h3>
                        <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
                            <input onChange={(e) => setSelectedImg(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
                            <img
                                src={
                                    selectedImg
                                        ? URL.createObjectURL(selectedImg)
                                        : authUser?.profilePic || assets.avatar_icon
                                }
                                alt="Profile Preview"
                                className='w-12 h-12 rounded-full'
                            />
                            Upload profile image
                        </label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text"
                            required
                            placeholder='Your name'
                            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
                        />
                        <textarea
                            onChange={(e) => setBio(e.target.value)}
                            value={bio}
                            placeholder='Write profile bio'
                            required
                            className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'
                            rows={4}
                        ></textarea>
                        <button
                            type="submit"
                            className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'
                        >
                            Save
                        </button>
                    </form>

                    {/* ✅ Updated preview image shown live on right side */}
                    <div className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt-10'>
                        <img
                            className='w-full h-full object-cover rounded-full border-2 border-white shadow-md'
                            src={
                                selectedImg
                                    ? URL.createObjectURL(selectedImg)
                                    : authUser?.profilePic || assets.avatar_icon
                            }
                            alt="Live Preview"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
