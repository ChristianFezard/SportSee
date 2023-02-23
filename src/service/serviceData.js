
/*import { USER_ACTIVITY } from "./IsMocked";
import { USER_MAIN_DATA } from "./IsMocked";
import { USER_PERFORMANCE } from "./IsMocked";
import { USER_AVERAGE_SESSIONS } from "./IsMocked";*/  
    
/*export function GetInfos(userId) {
    const callInfos = useAxios(`http://localhost:3000/user/${userId}`)
    if(callInfos.data === undefined) {
        alert('failed API User Infos calling')
        const mockedInfos = USER_MAIN_DATA.find((user) => user.id === parseInt(userId))
        return { 
            userInfos: mockedInfos.data?.userInfos,
            todayScore : mockedInfos.data?.todayScore || mockedInfos.data?.score,
            keyData: mockedInfos.data?.keyData
        }
    }
    return {
        error: callInfos.error,
        userInfos: callInfos.data?.userInfos,
        todayScore : callInfos.data?.todayScore || callInfos.data?.score,
        keyData: callInfos.data?.keyData
    }      
}


export function GetActivity(userId) {
    const callActivity = useAxios(`http://localhost:3000/user/${userId}/activity`)
    if(callActivity.data === undefined) {
        alert('failed API User Activity')
        const mockedActivity = USER_ACTIVITY.find((user) => user.userId === parseInt(userId))
        return { activity: mockedActivity.data?.sessions }
    }
    return {
        activity: callActivity.data?.sessions,
    }
}

export function GetSessions(userId) {
    const callSessions = useAxios(`http://localhost:3000/user/${userId}/average-sessions`)
    if(callSessions.data === undefined) {
        alert('failed API User Average Sessions')
        const mockedSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(userId))
        return { sessions: mockedSessions.data?.sessions }
    }
    return {
        sessions: callSessions.data?.sessions,
    }
}

export function GetPerformance(userId) {
const callPerformance = useAxios(`http://localhost:3000/user/${userId}/performance`)
if(callPerformance.data === undefined) {
    const mockedPerformance = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId))
    return { 
        performance: {
            kind: mockedPerformance.data?.kind,
            data: mockedPerformance.data?.data
        }
    }
}
return {
    performance: {
        kind: callPerformance.data?.kind,
        data: callPerformance.data?.data 
    }
}
}*/

