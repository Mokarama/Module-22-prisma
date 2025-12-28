import { create } from "domain";
import { prisma } from "./lib/prisma";

async function run() {
    // const createUser=await prisma.user.create({
    //     data:{
    //         name:"Abu Sufyan",
    //         email:"abusufyan@gmail.com"
    //     }
    // })
    // console.log("Create user:", createUser)


    //***create post for user id =1 */

    //     const createPost =await prisma.post.create({
    //         data:{
    //             title:"This is title !",
    //             content:"This is a big content",
    //             authorId:1
    //         }
    //     })
    //     console.log("CREATED POST , ", createPost)



    //*******create profile */
    // const createProfile =await prisma.profile.create({
    //     data:{
    //         bio:"Web developer",
    //         userId:1,
    //     }
    // })
    // console.log("Created profile ", createProfile)



    //***retrive all user */
    // const users = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profiles: true
    //     // }

    //     select:{
    //         posts:true,
    //         profiles:true
    //     }
    // });
    // console.dir(users, {depth:Infinity})

    // const updateUser =await prisma.profile.update({
    //     where:{
    //         userId:1
    //     },
    //     data:{
    //         bio:"Web developer and Mentor",
    //         dateOfBirth:"2025-12-27T09:28:09.810Z"
    //     },
    //     select:{
    //         id: true,
    //         bio:true,
    //         user:{
    //             select:{
    //                 name:true,
    //                 email:true,
    //             }
    //         }
    //     }
    // })
    // console.log("Updated User ", updateUser)


    //DELETE USER

    // const deleteUser =await prisma.user.delete({
    //     where:{
    //         id:2
    //     }
    // })
    // console.log(deleteUser)


    //GET USER DATA BY ID

    // const getUserDataById = await prisma.user.findUnique({
    //     where:{
    //         id:2
    //     },
    //     include:{
    //         posts:true,
    //         profiles:true
    //     }
    // })
    // console.log(getUserDataById)

    const upsetUser =await prisma.user.upsert({
        where:{
            email:"Shantu@gmail.com"
        },
        update:{
            name: "Shanta 2"
        },
        create:{
                name:"Shanta 3",
                email:"Shantu@gmail.com"
            }
    })
    console.log(upsetUser)
}

run()