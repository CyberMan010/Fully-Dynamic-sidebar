import { useState } from 'react';
import '../../styles/CollectionForm.scss';
import { Icon } from '../../config/icons';

interface CollectionFormProps {
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}

interface FormData {
  title: string;
  description: string;
  tags: string;
  accessLevel: string;
  image: File | null;
}

export const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    tags: "",
    accessLevel: "",
    image: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const isFormValid = formData.title && formData.description && formData.accessLevel;

  return (
    <form onSubmit={handleSubmit} className="collection-form">
      <div className="form-group">
        <label>
          Collection Name
          <span className="required">*</span>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            placeholder="Arena"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Description
          <span className="required">*</span>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            placeholder="Description"
            rows={4}
          />
        </label>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>
            Tags
            <span className="required">*</span>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData(prev => ({ ...prev, tags: e.target.value }))}
              placeholder="Placeholder"
            />
          </label>
        </div>

        <div className="form-group">
          <label>
            Access Level
            <span className="required">*</span>
            <select
              value={formData.accessLevel}
              onChange={(e) => setFormData(prev => ({ ...prev, accessLevel: e.target.value }))}
            >
              <option value="">Placeholder</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
              <option value="restricted">Restricted</option>
            </select>
          </label>
        </div>
      </div>

      <div className="upload-area">
        <input
          type="file"
          id="collection-image"
          accept="image/svg+xml,image/jpeg,image/png"
          onChange={handleFileChange}
          className="sr-only"
        />
        <label htmlFor="collection-image" className="upload-label">
          <Icon name="document-upload" size={40} />
          <span className="upload-text">
            <span className="upload-link">Click here</span> to upload your Collection Thumbnail or drag and drop.
          </span>
          <span className="upload-hint">Supported Format: SVG, JPG, PNG (10mb each)</span>
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="button button--primary" disabled={!isFormValid}>
          <span className="button-icon">+</span>
          Create Now
        </button>
        <button type="button" className="button button--text" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};