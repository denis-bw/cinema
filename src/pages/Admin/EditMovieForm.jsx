import {React, useState, useEffect} from 'react';
import { Form, Textarea, Label, Button, Input, Image } from './Admin.styled'

export const EditMovieForm = ({ data, onSubmit, onDelete }) => {
    const [formData, setFormData] = useState({
        id: data.id,
        title: data.title,
        imageUrl: data.imageUrl,
        genre: data.genre,
        year: data.year,
        description: data.description,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        onDelete(formData);  
    };

    return (
        <>
        <Form onSubmit={handleSubmit}>
            <div style={{paddingRight: "1em"}}>
            <Image src={formData.imageUrl} alt={formData.title} />
            
            <Button>Завантажити нове зображення</Button>
            <Button onClick={handleDelete} >Видалити фільм</Button>
            <Button>Зберегти зміни</Button>
            </div>
            <div>
            <Label>
                Назва:
                <Input type="text" name="title" value={formData.title} onChange={handleChange} />
            </Label>
            <Label>
                Жанр:
                <Input type="text" name="genre" value={formData.genre} onChange={handleChange} />
            </Label>
            <Label>
                Рік:
                <Input type="text" name="year" value={formData.year} onChange={handleChange} />
            </Label>
            <Label>
                Детальний опис:  
                <Textarea name="description" value={formData.description} onChange={handleChange} />
            </Label>
            </div>
        </Form>
        </>
    );
};
