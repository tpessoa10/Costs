import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import {useNavigate} from 'react-router-dom'

function NewProject(){

    const history = useNavigate()

    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject