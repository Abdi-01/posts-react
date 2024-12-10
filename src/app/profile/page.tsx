"use client";
import * as React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/FormInput";
import { Formik, Form, FormikProps } from "formik";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaEdit } from "react-icons/fa";
import { callAPI } from "@/config/axios";
import { setUpdateProfile } from "@/lib/redux/features/userSlice";

interface IProfileProps {}

interface FormEditValue {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

const Profile: React.FunctionComponent<IProfileProps> = (props) => {
  const {
    firstname,
    lastname,
    username,
    email,
    phone,
    website,
    imgprofile,
    isVerified,
  } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const [newImgProfile, setNewImgProfile] = React.useState<File | null>(null);

  const onUploadImg = async (): Promise<void> => {
    try {
      const token = localStorage.getItem("tkn");
      if (token) {
        const formData = new FormData();
        // Memasukkan data kedalam formData
        if (newImgProfile) {
          formData.append("imgProfile", newImgProfile);
        }
        const res = await callAPI.patch("/user/photo-profile", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(setUpdateProfile({ imgprofile: res.data.result }));
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-24 py-14 bg-slate-100 min-h-screen">
      <div className="w-1/2 p-8 m-auto rounded-md shadow bg-white">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <img
                className="w-20 h-20 mx-3 bg-slate-100 rounded-full shadow-md"
                src={
                  imgprofile ? imgprofile : `https://robohash.org/random.png`
                }
                alt="icon"
              />
              <Dialog>
                <DialogTrigger className="absolute right-2 bottom-1 bg-slate-400 p-1.5 rounded-full">
                  <FaEdit size={12} color="white" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Select your photo profile :</DialogTitle>
                    <input
                      type="file"
                      onChange={(e) => {
                        if (e.target.files) {
                          setNewImgProfile(e.target.files[0]);
                        }
                      }}
                    />
                    <DialogClose>
                      <Button
                        type="button"
                        disabled={!newImgProfile}
                        onClick={onUploadImg}
                      >
                        Upload
                      </Button>
                    </DialogClose>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
            <div>
              <p className="text-2xl font-bold">
                {firstname} {lastname}
              </p>
              <p className="text-gray-500 font-light">{email}</p>
            </div>
          </div>
          <Button>Edit</Button>
        </div>
        <Formik
          enableReinitialize
          initialValues={{
            firstname,
            lastname,
            username,
            email,
          }}
          onSubmit={(values) => {
            console.log(values);
            // onSignUp(values);
          }}
        >
          {(props: FormikProps<FormEditValue>) => {
            const { handleChange, values, touched, errors } = props;
            console.log("error formik", errors);

            return (
              <Form>
                <div className="py-2 md:py-6 space-y-5">
                  <div className="flex gap-6">
                    <div className="w-1/2 space-y-4">
                      <FormInput
                        type="text"
                        name="firstname"
                        label="First name"
                        onChange={handleChange}
                        value={values.firstname}
                      />
                      <FormInput
                        type="text"
                        name="username"
                        label="Username"
                        onChange={handleChange}
                        value={values.username}
                      />
                    </div>
                    <div className="w-1/2 space-y-4">
                      <FormInput
                        type="text"
                        name="lastname"
                        label="Last name"
                        onChange={handleChange}
                        value={values.lastname}
                      />
                      <FormInput
                        type="text"
                        name="email"
                        label="Email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                  </div>
                  {touched.email && errors.email ? (
                    <p className="text-red-400">{errors.email}</p>
                  ) : (
                    ""
                  )}
                  {/* <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <FormInput
                    type="password"
                    name="confPassword"
                    onChange={handleChange}
                    label="Confirmation Password"
                  /> */}
                  <div className="flex justify-end gap-4">
                    <Button
                      type="submit"
                      className="text-white px-2 md:px-4 py-1 md:py-2 text-sm md:text-base rounded-full shadow"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
