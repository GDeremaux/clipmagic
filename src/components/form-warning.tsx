import { TriangleAlert } from "lucide-react";

interface FormWarningProps {
  message?: string;
}

const FormWarning = ({
  message
}: FormWarningProps) => {
  if (!message) return null;

  return (
    <div className="bg-yellow-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-yellow-500 border border-yellow-500/15">
      <TriangleAlert className="min-h-4 min-w-4 h-4 w-4" />
      <p className="grow-0">{message}</p>
    </div>
  )
}

export default FormWarning;