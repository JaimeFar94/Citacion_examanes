import axios from 'axios'

const ExmanApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/citacion_examen/api/v1/student'
})

export const CreateaExam = (exam) => ExmanApi.post('/',exam)