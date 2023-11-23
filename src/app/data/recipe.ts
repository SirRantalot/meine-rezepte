export class Recipe {
    public recipe_id!: number;
    public recipe: string = '';
    public image: string = '';
    public favored: boolean = false;
    public country_id: number = 0;
    public user_id: number = 0;
}