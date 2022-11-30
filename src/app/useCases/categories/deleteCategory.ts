import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function deleteCategory(req : Request, res : Response) {
	try {
		const { categoryId } = req.params;
		await Category.findByIdAndDelete(categoryId);

		res.sendStatus(204);
	} catch(err) {
		console.log(err);
		res.sendStatus(500);
	}

}
