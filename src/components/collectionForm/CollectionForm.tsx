import { useState } from 'react';
import './CollectionForm.scss';

interface CollectionFormProps {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

interface FormData {
  title: string;
  description: string;
  type: string;
  accessLevel: string;
  tags: string;
  image: File | null;
}

export const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    type: "",
    accessLevel: "",
    tags: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isFormValid = formData.title && formData.description && formData.type && formData.accessLevel;

  return (
    <form onSubmit={handleSubmit} className="collection-form">
      <div className="collection-form__image-upload">
        <input 
          type="file" 
          id="image-upload" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="sr-only" 
        />
        <label htmlFor="image-upload" className="image-upload-label">
          {imagePreview ? (
            <img src={imagePreview} alt="Collection preview" className="image-preview" />
          ) : (
            <div className="upload-placeholder">
              <img src="/icons/upload.svg" alt="Upload" className="upload-icon" />
              <span>Upload Image</span>
              <span className="upload-hint">Recommended size: 800x600px</span>
            </div>
          )}
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="title">Collection Title</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          placeholder="Enter collection title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          placeholder="Enter collection description"
          rows={4}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            value={formData.type}
            onChange={(e) => setFormData((prev) => ({ ...prev, type: e.target.value }))}
          >
            <option value="">Select type</option>
            <option value="documentation">Documentation</option>
            <option value="tutorial">Tutorial</option>
            <option value="guide">Guide</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="access">Access Level</label>
          <select
            id="access"
            value={formData.accessLevel}
            onChange={(e) => setFormData((prev) => ({ ...prev, accessLevel: e.target.value }))}
          >
            <option value="">Select access level</option>
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="restricted">Restricted</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <input
          id="tags"
          type="text"
          value={formData.tags}
          onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
          placeholder="Enter tags separated by commas"
        />
      </div>

      <div className="form-actions">
        <button type="button" className="button button--outline" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="button" disabled={!isFormValid}>
          Create Now
        </button>
      </div>
    </form>
  );
};