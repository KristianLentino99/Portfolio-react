import {WorkModel} from "../classes/models/WorkModel";
import {url} from "inspector";


export const getWorks = () => {
    let works = [];

    works.push(
        new WorkModel({
            image: "https://www.icaacademy.it/admin/slider-images/2-1/banner_home_interni20211130161452.jpg",
            project_title: "ICA Academy",
            project_url: "https://www.icaacademy.it/",
            project_category: "E-Learning Portal"
        })
    );
    works.push(
        new WorkModel({
            image: "https://www.rustproductions.it/assets/img/main.jpg",
            project_title: "Rust Productions Portfolio",
            project_url: "https://www.rustproductions.it/",
            project_category: "Videomaker's portfolio"
        })
    );
    works.push(
        new WorkModel({
            image: "https://www.del-eat.com/wp-content/uploads/2021/05/Progetto-senza-titolo-24.png",
            project_title: "DelEat",
            project_url: "https://www.del-eat.com/",
            project_category: "Food delivery's App"
        })
    );
    works.push(
        new WorkModel({
            image: "https://www.hubway.it/wp-content/uploads/2021/01/ufficio20200328225216-400x300.png",
            project_title: "Hubway",
            project_url: "https://hubway.it/",
            project_category: "Temporary workplace booking"
        })
    );
    works.push(
        new WorkModel({
            image: 'https://mgc-group.it/wp-content/uploads/2020/04/Recruitment-scaled.jpg',
            project_title: "CELHO",
            project_url: "https://www.celho.eu/",
            project_category: "Recruitment website"
        })
    );

    return works;
}
