import Image from '../models/Image'

export default {
    reder(image: Image){
        return{
            id: image.id,
            url: `http://localhost:3333/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.reder(image));
    }
}