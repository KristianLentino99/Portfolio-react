
type WorkModelType = {
    image: string,
    project_title: string,
    project_category: string,
    project_url: string,
}
export class WorkModel{
    private _image: string;
    private _project_title: string;
    private _project_category: string;
    private _project_url: string;
    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get project_title(): string {
        return this._project_title;
    }

    set project_title(value: string) {
        this._project_title = value;
    }

    get project_category(): string {
        return this._project_category;
    }

    set project_category(value: string) {
        this._project_category = value;
    }

    get project_url(): string {
        return this._project_url;
    }

    set project_url(value: string) {
        this._project_url = value;
    }

    constructor({image,project_title,project_category,project_url}:WorkModelType) {
        this._image = image;
        this._project_title = project_title;
        this._project_category = project_category;
        this._project_url = project_url;
    }

}
