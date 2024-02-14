import { SlArrowRight } from "react-icons/sl";
import './styles.css'

const Card = ({projectName, projectDescription, projectLastChanges}) => (
    <li>
        <div class="projects-info">
            <h2>{projectName}</h2>
            <p class="projects-description">{projectDescription}</p>
            <p class="projects-last-changes">{projectLastChanges}</p>
        </div>
        <div class="projects-icon">
            <SlArrowRight />
        </div>
    </li>
)

export default Card;