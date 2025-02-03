"use client"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import "./CollectionForm.scss"

interface CollectionFormProps {
  onSubmit: (data: any) => void
  onCancel: () => void
}

export const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    accessLevel: "",
    tags: "",
    image: null as File | null,
  })

  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }))
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const isFormValid = formData.title && formData.description && formData.type && formData.accessLevel

  return (
    <form onSubmit={handleSubmit} className="collection-form">
      <div className="collection-form__image-upload">
        <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} className="sr-only" />
        <Label htmlFor="image-upload" className="image-upload-label">
          {imagePreview ? (
            <img src={imagePreview || "/placeholder.svg"} alt="Collection preview" className="image-preview" />
          ) : (
            <div className="upload-placeholder">
              <Upload className="h-8 w-8 mb-2" />
              <span>Upload Image</span>
              <span className="text-sm text-muted-foreground">Recommended size: 800x600px</span>
            </div>
          )}
        </Label>
      </div>

      <div className="form-group">
        <Label htmlFor="title">Collection Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          placeholder="Enter collection title"
        />
      </div>

      <div className="form-group">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          placeholder="Enter collection description"
          rows={4}
        />
      </div>

      <div className="form-row">
        <div className="form-group flex-1">
          <Label htmlFor="type">Type</Label>
          <Select value={formData.type} onValueChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="documentation">Documentation</SelectItem>
              <SelectItem value="tutorial">Tutorial</SelectItem>
              <SelectItem value="guide">Guide</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="form-group flex-1">
          <Label htmlFor="access">Access Level</Label>
          <Select
            value={formData.accessLevel}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, accessLevel: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select access level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
              <SelectItem value="restricted">Restricted</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="form-group">
        <Label htmlFor="tags">Tags</Label>
        <Input
          id="tags"
          value={formData.tags}
          onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value }))}
          placeholder="Enter tags separated by commas"
        />
      </div>

      <div className="form-actions">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={!isFormValid}>
          Create Now
        </Button>
      </div>
    </form>
  )
}

