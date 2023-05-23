import axiox from "axios"

export const api = axiox.create({
    baseURL :"https://v3.football.api-sports.io",
    timeout : 5000
})