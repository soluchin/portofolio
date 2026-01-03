import { ExternalLink } from 'lucide-react'
import { Card, CardHeader, Button } from '../ui'
import type { Certification } from '../../types/certification'

interface CertificationCardProps {
  certification: Certification
  formatDate: (date: Date | "present") => string
}

export function CertificationCard({ certification, formatDate }: CertificationCardProps) {
  return (
    <Card>
      <CardHeader title={certification.title} titleSize="sm" />
      <p className="font-bold text-gray-700 mb-2">{certification.issuer}</p>
      <p className="text-sm text-gray-600 mb-3">
        Issued: {formatDate(certification.issueDate)}
      </p>
      <p className="text-xs text-gray-500 mb-4 font-mono">
        ID: {certification.credentialID}
      </p>
      <Button 
        href={certification.credentialURL} 
        variant="success" 
        icon={<ExternalLink size={16} />}
      >
        Verify
      </Button>
    </Card>
  )
}
