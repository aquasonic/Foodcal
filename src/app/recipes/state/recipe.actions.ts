import { Recipe } from '../models/recipes.model';

export class AddRecipe {
    static readonly type = '[Recipe] Add Recipe';
    constructor(public recipe: Recipe) {}
}

export class UpdateRecipe {
    static readonly type = '[Recipe] Update Recipe';
    constructor(public recipe: Recipe) {}
}

export class DeleteRecipe {
    static readonly type = '[Recipe] Delete Recipe';
    constructor(public id: number) {}
}

export class EnsureLoadAllRecipes {
    static readonly type = '[Recipe] Ensure Load All Recipes';
    constructor(public recipes: Recipe[]) {}
}
