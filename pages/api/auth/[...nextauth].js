// import NextAuth, { NextAuthOptions } from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials"
// import getUsers from './getUsers'

// export default NextAuth({
//     providers: [
//         CredentialsProvider({
//             name: 'Credentials',
//             type: 'credentials',
//             credentials: {},
//             async authorize(credentials, req) {

//                 // credentials contém os dados vindos do frontend
//                 const { email, password } = credentials

//                 // getUsers contém os dados vindos do backend
//                 const users = await getUsers();
//                 let isAuth;
//                 let idx;

//                 for (let i = 0; i < users.length; i++) {
//                     const user = users[i];

//                     if (user.email === email && user.password === password) {
//                         isAuth = true;
//                         idx = i;
//                         break;
//                     }

//                     isAuth = false;
//                 }
                
//                 if (!isAuth) {
//                     throw new Error('Invalid credentials');
//                 }

//                 return users[idx];
//             }
//         })
//     ],
//     session: {
//         jwt: true
//     },
//     jwt: {
//         secret: process.env.SECRET
//     },
//     callbacks: {
//         async jwt({ token, user, account, profile, isNewUser }) {
//             if (user) {
//                 // pass the role of user to token
//                 token.role = user.role
//             }

//             return token
//         },
//         async session({ session, user, token }) {
//             // pass the role to client session
//             if (token) {
//                 session.role = token.role
//             }

//             return session
//         }
//     },
//     secret: process.env.SECRET,
//     pages: {
//         signIn: '/index',
//         // error: '/auth/error',
//         // signOut: '/auth/signout'
//     }
// })
