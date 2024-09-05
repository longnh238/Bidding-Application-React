import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddItem.css";

function AddItem(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && image) {
      props.onAddItem(name, description, image);
      setName("");
      setDescription("");
      setImage("");
    }
  };

  return (
    <section className="add-item">
      <h2>Add New Item</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Item Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4} /* Adjust the number of rows as needed */
            placeholder="Enter item description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </Form.Group>

        <div className="btn-container">
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default AddItem;
