import Category from '../models/category';
import slugify from 'slugify';

export const create = async(req, res) => {
    try {
        const { name } = req.body;
        const category = await new Category({
            name,
            slug: slugify(name),
        }).save();

        // console.log("saved category => ", category); 
        
        res.json(category);
    } catch (err) {
        console.log(err);
    }
}